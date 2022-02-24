# Please refer to https://fepper.io/docpage--pattern-annotations.html for
# documentation on annotating Fepper patterns. Fepper supports Front Matter
# (YAML + Markdown) syntax for annotations.

# This file is the source for global annotations. Annotations can also be added
# to patterns locally by writing .md files in the directories containing the
# patterns.

---
el: #nav
title: Navigation
---
Navigation for responsive web experiences can be tricky. Large navigation menus 
are typical on desktop sites, but mobile screen sizes don't give us the luxury 
of space. We're dealing with this situation by creating a simple menu anchor 
that toggles the main navigation on small screens. Once the screen size is large 
enough to accommodate the nav, we show the main navigation links and hide the 
menu anchor.

~*~

---
el: .search-form
title: Search
---
Search is an incredibly important priority, especially for mobile. It is a great 
idea to give users the ability to jump directly to what they are looking for 
without forcing them to wade through your site's navigation.
