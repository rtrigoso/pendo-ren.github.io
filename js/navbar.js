document.getElementById("sidebar-menu").innerHTML =

    '<div class="left_col scroll-view">' +
    '<div class="navbar nav_title" style="border: 0;">' + 
    '<a id="nav-title" href="index.html" class="site_title"><i class="fa fa-paw"></i> <span>Acme App</span></a>' +
    '</div>' +
    '<div class="clearfix"></div>' +
    '<div class="profile">' + 
    '<div class="profile_pic">' + 
    '<img src="images/img.jpg" alt="..." class="img-circle profile_img">' + 
    '</div>' + 
    '<div class="profile_info">' + 
    '<span>Welcome,</span>' + 
    '<h2>John Doe</h2>' + 
    '</div>' + 
    '</div>' +
    '<br />' +
    '<div id="sidebar" class="main_menu_side hidden-print main_menu">' + 
    '<nav id="sidebar-menu"></nav>' +
    '<div class="menu_section">' +
    '<h3>General</h3>' +
    '<ul class="nav side-menu">' +
    '<li><a id="nav-hdr-home"><i class="fa fa-home"></i> Home <span class="fa fa-chevron-down"></span></a>' +
    '<ul id="nav-drop-home" class="nav child_menu" style="display: none">' +
    '<li><a id="nav-dashboard" href="index.html">Dashboard</a></li>' +
    '<li><a id="nav-dashboard2" href="index2.html">Dashboard2</a></li>' +
    '<li><a id="nav-dashboard3" href="index3.html">Dashboard3</a></li>' +
    '</ul>' +
    '</li>' +
    '<li><a id="nav-hdr-forms"><i class="fa fa-edit"></i> Forms <span class="fa fa-chevron-down"></span></a>' +
    '<ul id="nav-drop-forms" class="nav child_menu" style="display: none”>' +
    '<li><a id="nav-form" href="form.html">General Form</a></li>' +
    '<li><a id="nav-advform" href="form_advanced.html">Advanced Components</a></li>' +
    '<li><a id="nav-formval" href="form_validation.html">Form Validation</a></li>' +
    '<li><a id="nav-formwizard" href="form_wizards.html">Form Wizard</a></li>' +
    '<li><a id="nav-formupload" href="form_upload.html">Form Upload</a></li>' +
    '<li><a id="nav-formbuttons" href="form_buttons.html">Form Buttons</a></li>' +
    '</ul>' +
    '</li>' +
    '<li><a id="nav-hdr-ui"><i class="fa fa-desktop"></i> UI Elements <span class="fa fa-chevron-down"></span></a>' +
    '<ul id="nav-drop-ui" class="nav child_menu" style="display: none">' +
    '<li><a id="nav-ui-gen" href="general_elements.html">General Elements</a></li>' +
    '<li><a id="nav-ui-media" href="media_gallery.html">Media Gallery</a></li>' +
    '<li><a id="nav-ui-typo" href="typography.html">Typography</a></li>' +
    '<li><a id="nav-ui-icons" href="icons.html">Icons</a></li>' +
    '<li><a id="nav-ui-glyph" href="glyphicons.html">Glyphicons</a></li>' +
    '<li><a id="nav-ui-widget" href="widgets.html">Widgets</a></li>' +
    '<li><a id="nav-ui-invoice" href="invoice.html">Invoice</a></li>' +
    '<li><a id="nav-ui-inbox" href="inbox.html">Inbox</a></li>' +
    '<li><a id="nav-ui-calendar" href="calendar.html">Calendar</a></li>' +
    '</ul>' +
    '</li>' +
    '<li><a id="nav-hdr-tables"><i class="fa fa-table"></i> Tables <span class="fa fa-chevron-down"></span></a>' +
    '<ul id="nav-drop-tables" class="nav child_menu" style="display: none">' +
    '<li><a id="nav-tables" href="tables.html">Tables</a></li>' +
    '<li><a id="nav-dynamictables" href="tables_dynamic.html">Table Dynamic</a></li>' +
    '</ul>' +
    '</li>' +
    '<li><a id="nav-hdr-data"><i class="fa fa-bar-chart-o"></i> Data Presentation <span class="fa fa-chevron-down"></span></a>' +
    '<ul id="nav-drop-data" class="nav child_menu" style="display: none">' +
    '<li><a id="nav-chartjs" href="chartjs.html">Chart JS</a></li>' +
    '<li><a id="nav-chartjs2" href="chartjs2.html">Chart JS2</a></li>' +
    '<li><a id="nav-morisjs" href="morisjs.html">Moris JS</a></li>' +
    '<li><a id="nav-echarts" href="echarts.html">ECharts </a></li>' +
    '<li><a id="nav-othercharts" href="other_charts.html">Other Charts </a></li>' +
    '</ul>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '<div class="menu_section">' +
    '<h3>Live On</h3>' +
    '<ul class="nav side-menu">' +
    '<li><a id="nav-hdr-additional"><i class="fa fa-bug"></i> Additional Pages <span class="fa fa-chevron-down"></span></a>' +
    '<ul id="nav-drop-additional" class="nav child_menu" style="display: none">' +
    '<li><a id="nav-ecommerce" href="e_commerce.html">E-commerce</a></li>' +
    '<li><a id="nav-projects" href="projects.html">Projects</a></li>' +
    '<li><a id="nav-projectdetails" href="project_detail.html">Project Detail</a></li>' +
    '<li><a id="nav-contacts" href="contacts.html">Contacts</a></li>' +
    '<li><a id="nav-profile" href="profile.html">Profile</a></li>' +
    '<li><a id="nav-csp" href="csp.html">Content Security Policy</a></li>' +
    '<li><a id="nav-framebuster" href="framebuster.html">Framebuster Page</a></li>' +
    '<li><a id="nav-iframe" href="iframe.html">I-Frame Page</a></li>' +
    '<li><a id="nav-xframedeny" href="xframedeny.html">X-Frame Options: Deny</a></li>' +
    '<li><a id="nav-xframesameorigin" href="xframesameorigin.html">X-Frame Options: Same Origin</a></li>' +
    '</ul>' +
    '</li>' +
    '<li><a id="nav-hdr-extras"><i class="fa fa-windows"></i> Extras <span class="fa fa-chevron-down"></span></a>' +
    '<ul id="nav-drop-extras" class="nav child_menu" style="display: none">' +
    '<li><a id="nav-404" href="page_404.html">404 Error</a></li>' +
    '<li><a id="nav-500" href="page_500.html">500 Error</a></li>' +
    '<li><a id="nav-plain" href="plain_page.html">Plain Page</a></li>' +
    '<li><a id="nav-setup" href="setup.html">Setup Page</a></li>' +
    '<li><a id="nav-pricing" href="pricing_tables.html">Pricing Tables</a></li>' +
    '</ul>' +
    '</li>' +
    '<li><a id="nav-hdr-landing"><i class="fa fa-laptop"></i> Landing Page <span class="label label-success pull-right">Coming Soon</span></a>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</div>' +
    '<div class="sidebar-footer hidden-small">' + 
    '<a data-toggle="tooltip" data-placement="top" title="Settings">' + 
    '<span class="glyphicon glyphicon-cog" aria-hidden="true"></span>' + 
    '</a>' + 
    '<a data-toggle="tooltip" data-placement="top" title="FullScreen">' + 
    '<span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>' +
    '</a>' +
    '<a data-toggle="tooltip" data-placement="top" title="Lock">' + 
    '<span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>' + 
    '</a>' + 
    '<a data-toggle="tooltip" data-placement="top" title="Logout">' + 
    '<span class="glyphicon glyphicon-off" aria-hidden="true"></span>' + 
    '</a>'+
    '</div>' +
    '</div>';
