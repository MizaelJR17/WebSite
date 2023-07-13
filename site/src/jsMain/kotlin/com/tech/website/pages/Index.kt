package com.tech.website.pages

import androidx.compose.runtime.*
import com.tech.website.sections.MainSection
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxHeight
import com.varabyte.kobweb.core.Page

@Page
@Composable
fun HomePage() {
  Column (modifier = Modifier.fillMaxHeight() ,
        verticalArrangement = Arrangement.Top,
        horizontalAlignment = Alignment.CenterHorizontally
      ){


      MainSection()
  }
}
