package org.gradle.accessors.dm;

import org.gradle.api.NonNullApi;
import org.gradle.api.artifacts.MinimalExternalModuleDependency;
import org.gradle.plugin.use.PluginDependency;
import org.gradle.api.artifacts.ExternalModuleDependencyBundle;
import org.gradle.api.artifacts.MutableVersionConstraint;
import org.gradle.api.provider.Provider;
import org.gradle.api.model.ObjectFactory;
import org.gradle.api.provider.ProviderFactory;
import org.gradle.api.internal.catalog.AbstractExternalDependencyFactory;
import org.gradle.api.internal.catalog.DefaultVersionCatalog;
import java.util.Map;
import org.gradle.api.internal.attributes.ImmutableAttributesFactory;
import org.gradle.api.internal.artifacts.dsl.CapabilityNotationParser;
import javax.inject.Inject;

/**
 * A catalog of dependencies accessible via the `libs` extension.
 */
@NonNullApi
public class LibrariesForLibsInPluginsBlock extends AbstractExternalDependencyFactory {

    private final AbstractExternalDependencyFactory owner = this;
    private final KobwebLibraryAccessors laccForKobwebLibraryAccessors = new KobwebLibraryAccessors(owner);
    private final KobwebxLibraryAccessors laccForKobwebxLibraryAccessors = new KobwebxLibraryAccessors(owner);
    private final VersionAccessors vaccForVersionAccessors = new VersionAccessors(providers, config);
    private final BundleAccessors baccForBundleAccessors = new BundleAccessors(objects, providers, config, attributesFactory, capabilityNotationParser);
    private final PluginAccessors paccForPluginAccessors = new PluginAccessors(providers, config);

    @Inject
    public LibrariesForLibsInPluginsBlock(DefaultVersionCatalog config, ProviderFactory providers, ObjectFactory objects, ImmutableAttributesFactory attributesFactory, CapabilityNotationParser capabilityNotationParser) {
        super(config, providers, objects, attributesFactory, capabilityNotationParser);
    }

    /**
     * Returns the group of libraries at kobweb
     * @deprecated Will be removed in Gradle 9.0.
     */
    @Deprecated
    public KobwebLibraryAccessors getKobweb() {
        org.gradle.internal.deprecation.DeprecationLogger.deprecateBehaviour("Accessing libraries or bundles from version catalogs in the plugins block.").withAdvice("Only use versions or plugins from catalogs in the plugins block.").willBeRemovedInGradle9().withUpgradeGuideSection(8, "kotlin_dsl_deprecated_catalogs_plugins_block").nagUser();
        return laccForKobwebLibraryAccessors;
    }

    /**
     * Returns the group of libraries at kobwebx
     * @deprecated Will be removed in Gradle 9.0.
     */
    @Deprecated
    public KobwebxLibraryAccessors getKobwebx() {
        org.gradle.internal.deprecation.DeprecationLogger.deprecateBehaviour("Accessing libraries or bundles from version catalogs in the plugins block.").withAdvice("Only use versions or plugins from catalogs in the plugins block.").willBeRemovedInGradle9().withUpgradeGuideSection(8, "kotlin_dsl_deprecated_catalogs_plugins_block").nagUser();
        return laccForKobwebxLibraryAccessors;
    }

    /**
     * Returns the group of versions at versions
     */
    public VersionAccessors getVersions() {
        return vaccForVersionAccessors;
    }

    /**
     * Returns the group of bundles at bundles
     * @deprecated Will be removed in Gradle 9.0.
     */
    @Deprecated
    public BundleAccessors getBundles() {
        org.gradle.internal.deprecation.DeprecationLogger.deprecateBehaviour("Accessing libraries or bundles from version catalogs in the plugins block.").withAdvice("Only use versions or plugins from catalogs in the plugins block.").willBeRemovedInGradle9().withUpgradeGuideSection(8, "kotlin_dsl_deprecated_catalogs_plugins_block").nagUser();
        return baccForBundleAccessors;
    }

    /**
     * Returns the group of plugins at plugins
     */
    public PluginAccessors getPlugins() {
        return paccForPluginAccessors;
    }

    /**
     * @deprecated Will be removed in Gradle 9.0.
     */
    @Deprecated
    public static class KobwebLibraryAccessors extends SubDependencyFactory {
        private final KobwebSilkLibraryAccessors laccForKobwebSilkLibraryAccessors = new KobwebSilkLibraryAccessors(owner);

        public KobwebLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for api (com.varabyte.kobweb:kobweb-api)
             * This dependency was declared in catalog libs.versions.toml
         * @deprecated Will be removed in Gradle 9.0.
             */
        @Deprecated
            public Provider<MinimalExternalModuleDependency> getApi() {
            org.gradle.internal.deprecation.DeprecationLogger.deprecateBehaviour("Accessing libraries or bundles from version catalogs in the plugins block.").withAdvice("Only use versions or plugins from catalogs in the plugins block.").willBeRemovedInGradle9().withUpgradeGuideSection(8, "kotlin_dsl_deprecated_catalogs_plugins_block").nagUser();
                return create("kobweb.api");
        }

            /**
             * Creates a dependency provider for core (com.varabyte.kobweb:kobweb-core)
             * This dependency was declared in catalog libs.versions.toml
         * @deprecated Will be removed in Gradle 9.0.
             */
        @Deprecated
            public Provider<MinimalExternalModuleDependency> getCore() {
            org.gradle.internal.deprecation.DeprecationLogger.deprecateBehaviour("Accessing libraries or bundles from version catalogs in the plugins block.").withAdvice("Only use versions or plugins from catalogs in the plugins block.").willBeRemovedInGradle9().withUpgradeGuideSection(8, "kotlin_dsl_deprecated_catalogs_plugins_block").nagUser();
                return create("kobweb.core");
        }

        /**
         * Returns the group of libraries at kobweb.silk
         * @deprecated Will be removed in Gradle 9.0.
         */
        @Deprecated
        public KobwebSilkLibraryAccessors getSilk() {
            org.gradle.internal.deprecation.DeprecationLogger.deprecateBehaviour("Accessing libraries or bundles from version catalogs in the plugins block.").withAdvice("Only use versions or plugins from catalogs in the plugins block.").willBeRemovedInGradle9().withUpgradeGuideSection(8, "kotlin_dsl_deprecated_catalogs_plugins_block").nagUser();
            return laccForKobwebSilkLibraryAccessors;
        }

    }

    /**
     * @deprecated Will be removed in Gradle 9.0.
     */
    @Deprecated
    public static class KobwebSilkLibraryAccessors extends SubDependencyFactory {
        private final KobwebSilkIconsLibraryAccessors laccForKobwebSilkIconsLibraryAccessors = new KobwebSilkIconsLibraryAccessors(owner);

        public KobwebSilkLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for core (com.varabyte.kobweb:kobweb-silk)
             * This dependency was declared in catalog libs.versions.toml
         * @deprecated Will be removed in Gradle 9.0.
             */
        @Deprecated
            public Provider<MinimalExternalModuleDependency> getCore() {
            org.gradle.internal.deprecation.DeprecationLogger.deprecateBehaviour("Accessing libraries or bundles from version catalogs in the plugins block.").withAdvice("Only use versions or plugins from catalogs in the plugins block.").willBeRemovedInGradle9().withUpgradeGuideSection(8, "kotlin_dsl_deprecated_catalogs_plugins_block").nagUser();
                return create("kobweb.silk.core");
        }

        /**
         * Returns the group of libraries at kobweb.silk.icons
         * @deprecated Will be removed in Gradle 9.0.
         */
        @Deprecated
        public KobwebSilkIconsLibraryAccessors getIcons() {
            org.gradle.internal.deprecation.DeprecationLogger.deprecateBehaviour("Accessing libraries or bundles from version catalogs in the plugins block.").withAdvice("Only use versions or plugins from catalogs in the plugins block.").willBeRemovedInGradle9().withUpgradeGuideSection(8, "kotlin_dsl_deprecated_catalogs_plugins_block").nagUser();
            return laccForKobwebSilkIconsLibraryAccessors;
        }

    }

    /**
     * @deprecated Will be removed in Gradle 9.0.
     */
    @Deprecated
    public static class KobwebSilkIconsLibraryAccessors extends SubDependencyFactory {

        public KobwebSilkIconsLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for fa (com.varabyte.kobweb:kobweb-silk-icons-fa)
             * This dependency was declared in catalog libs.versions.toml
         * @deprecated Will be removed in Gradle 9.0.
             */
        @Deprecated
            public Provider<MinimalExternalModuleDependency> getFa() {
            org.gradle.internal.deprecation.DeprecationLogger.deprecateBehaviour("Accessing libraries or bundles from version catalogs in the plugins block.").withAdvice("Only use versions or plugins from catalogs in the plugins block.").willBeRemovedInGradle9().withUpgradeGuideSection(8, "kotlin_dsl_deprecated_catalogs_plugins_block").nagUser();
                return create("kobweb.silk.icons.fa");
        }

            /**
             * Creates a dependency provider for mdi (com.varabyte.kobweb:kobweb-silk-icons-mdi)
             * This dependency was declared in catalog libs.versions.toml
         * @deprecated Will be removed in Gradle 9.0.
             */
        @Deprecated
            public Provider<MinimalExternalModuleDependency> getMdi() {
            org.gradle.internal.deprecation.DeprecationLogger.deprecateBehaviour("Accessing libraries or bundles from version catalogs in the plugins block.").withAdvice("Only use versions or plugins from catalogs in the plugins block.").willBeRemovedInGradle9().withUpgradeGuideSection(8, "kotlin_dsl_deprecated_catalogs_plugins_block").nagUser();
                return create("kobweb.silk.icons.mdi");
        }

    }

    /**
     * @deprecated Will be removed in Gradle 9.0.
     */
    @Deprecated
    public static class KobwebxLibraryAccessors extends SubDependencyFactory {

        public KobwebxLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for markdown (com.varabyte.kobwebx:kobwebx-markdown)
             * This dependency was declared in catalog libs.versions.toml
         * @deprecated Will be removed in Gradle 9.0.
             */
        @Deprecated
            public Provider<MinimalExternalModuleDependency> getMarkdown() {
            org.gradle.internal.deprecation.DeprecationLogger.deprecateBehaviour("Accessing libraries or bundles from version catalogs in the plugins block.").withAdvice("Only use versions or plugins from catalogs in the plugins block.").willBeRemovedInGradle9().withUpgradeGuideSection(8, "kotlin_dsl_deprecated_catalogs_plugins_block").nagUser();
                return create("kobwebx.markdown");
        }

    }

    public static class VersionAccessors extends VersionFactory  {

        private final JetbrainsVersionAccessors vaccForJetbrainsVersionAccessors = new JetbrainsVersionAccessors(providers, config);
        public VersionAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

            /**
             * Returns the version associated to this alias: kobweb (0.13.7)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog libs.versions.toml
             */
            public Provider<String> getKobweb() { return getVersion("kobweb"); }

            /**
             * Returns the version associated to this alias: kotlin (1.8.20)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog libs.versions.toml
             */
            public Provider<String> getKotlin() { return getVersion("kotlin"); }

        /**
         * Returns the group of versions at versions.jetbrains
         */
        public JetbrainsVersionAccessors getJetbrains() {
            return vaccForJetbrainsVersionAccessors;
        }

    }

    public static class JetbrainsVersionAccessors extends VersionFactory  {

        public JetbrainsVersionAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

            /**
             * Returns the version associated to this alias: jetbrains.compose (1.4.1)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog libs.versions.toml
             */
            public Provider<String> getCompose() { return getVersion("jetbrains.compose"); }

    }

    /**
     * @deprecated Will be removed in Gradle 9.0.
     */
    @Deprecated
    public static class BundleAccessors extends BundleFactory {

        public BundleAccessors(ObjectFactory objects, ProviderFactory providers, DefaultVersionCatalog config, ImmutableAttributesFactory attributesFactory, CapabilityNotationParser capabilityNotationParser) { super(objects, providers, config, attributesFactory, capabilityNotationParser); }

    }

    public static class PluginAccessors extends PluginFactory {
        private final JetbrainsPluginAccessors paccForJetbrainsPluginAccessors = new JetbrainsPluginAccessors(providers, config);
        private final KobwebPluginAccessors paccForKobwebPluginAccessors = new KobwebPluginAccessors(providers, config);
        private final KobwebxPluginAccessors paccForKobwebxPluginAccessors = new KobwebxPluginAccessors(providers, config);
        private final KotlinPluginAccessors paccForKotlinPluginAccessors = new KotlinPluginAccessors(providers, config);

        public PluginAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

        /**
         * Returns the group of plugins at plugins.jetbrains
         */
        public JetbrainsPluginAccessors getJetbrains() {
            return paccForJetbrainsPluginAccessors;
        }

        /**
         * Returns the group of plugins at plugins.kobweb
         */
        public KobwebPluginAccessors getKobweb() {
            return paccForKobwebPluginAccessors;
        }

        /**
         * Returns the group of plugins at plugins.kobwebx
         */
        public KobwebxPluginAccessors getKobwebx() {
            return paccForKobwebxPluginAccessors;
        }

        /**
         * Returns the group of plugins at plugins.kotlin
         */
        public KotlinPluginAccessors getKotlin() {
            return paccForKotlinPluginAccessors;
        }

    }

    public static class JetbrainsPluginAccessors extends PluginFactory {

        public JetbrainsPluginAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

            /**
             * Creates a plugin provider for jetbrains.compose to the plugin id 'org.jetbrains.compose'
             * This plugin was declared in catalog libs.versions.toml
             */
            public Provider<PluginDependency> getCompose() { return createPlugin("jetbrains.compose"); }

    }

    public static class KobwebPluginAccessors extends PluginFactory {

        public KobwebPluginAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

            /**
             * Creates a plugin provider for kobweb.application to the plugin id 'com.varabyte.kobweb.application'
             * This plugin was declared in catalog libs.versions.toml
             */
            public Provider<PluginDependency> getApplication() { return createPlugin("kobweb.application"); }

            /**
             * Creates a plugin provider for kobweb.library to the plugin id 'com.varabyte.kobweb.library'
             * This plugin was declared in catalog libs.versions.toml
             */
            public Provider<PluginDependency> getLibrary() { return createPlugin("kobweb.library"); }

    }

    public static class KobwebxPluginAccessors extends PluginFactory {

        public KobwebxPluginAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

            /**
             * Creates a plugin provider for kobwebx.markdown to the plugin id 'com.varabyte.kobwebx.markdown'
             * This plugin was declared in catalog libs.versions.toml
             */
            public Provider<PluginDependency> getMarkdown() { return createPlugin("kobwebx.markdown"); }

    }

    public static class KotlinPluginAccessors extends PluginFactory {

        public KotlinPluginAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

            /**
             * Creates a plugin provider for kotlin.multiplatform to the plugin id 'org.jetbrains.kotlin.multiplatform'
             * This plugin was declared in catalog libs.versions.toml
             */
            public Provider<PluginDependency> getMultiplatform() { return createPlugin("kotlin.multiplatform"); }

    }

}
