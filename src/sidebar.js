function addSidebar() {
    var openbtn = document.createElement("span");
    openbtn.innerHTML = "<a href='javascript:void(0)' onclick='openNav()' class='openbtn'>&equiv;</a>";
    var sidebar = document.createElement("div");
    sidebar.className = "sidebar";
    sidebar.id = "sidebar";
    var closebtn = document.createElement("span");
    closebtn.innerHTML = "<a href='javascript:void(0)' onclick='closeNav()' class='closebtn'>&times;</a>";
    var opts = [{page: "Home", link: "index.html"}, {page: "School Materials", link: "school.html"}, {page: "ASE", link: "ase.html"}, {page: "Online Classes", link: "onlineclasses.html"}, {page: "Euclid's Orchard", link: "https://yu-dylan.github.io/euclid-orchard/"}, {page: "Blog", link: "https://yu-dylan-2.github.io/"}];
    var name = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
    if(name == "") name = "index.html";
    opts.forEach(ele => {
        if(ele.link == name) {
            ele.current = true;
        }
    });
    opts.forEach(ele => {
        sidebar.innerHTML += "<a" + (("current" in ele) ? " id=current_page" : "") + " href=" + ele.link + ">" + ele.page + "</a>";
    });
    sidebar.appendChild(closebtn);
    document.body.append(openbtn);
    document.body.append(sidebar);
    /*var openbtn = document.createElement("a");
    openbtn.className = "openbtn";
    openbtn.onclick = openNav;
    openbtn.href = "javascript:void(0)";
    openbtn.innerHTML = "&equiv;";
    var sidebar = document.createElement("div");
    sidebar.className = "sidebar";
    sidebar.id = "sidebar";
    var closebtn = document.createElement("a");
    closebtn.className = "closebtn";
    closebtn.onclick = closeNav;
    closebtn.href = "javascript:void(0)";
    closebtn.innerHTML = "&times;";
    var home = document.createElement("a");
    home.href = "index.html";
    home.innerHTML = "Home";
    var school = document.createElement("a");
    school.href = "school.html";
    school.innerHTML = "School Materials";
    var ase = document.createElement("a");
    ase.href = "ase.html";
    ase.innerHTML = "ASE";
    var onlineclasses = document.createElement("a");
    onlineclasses.href = "onlineclasses.html";
    onlineclasses.innerHTML = "onlineclasses";
    var onlineclasses = document.createElement("a");
    onlineclasses.href = "onlineclasses.html";
    onlineclasses.innerHTML = "onlineclasses";
    var eo = document.createElement("a");
    eo.href = "https://yu-dylan.github.io/euclid-orchard/";
    eo.innerHTML = "eo";
    var blog = document.createElement("a");
    blog.href = "https://yu-dylan-2.github.io/";
    blog.innerHTML = "blog";
    sidebar.appendChild(closebtn);
    sidebar.appendChild(home);
    sidebar.appendChild(school);
    sidebar.appendChild(ase);
    sidebar.appendChild(onlineclasses);
    sidebar.appendChild(eo);
    sidebar.appendChild(blog);
    document.body.append(openbtn);
    document.body.append(sidebar);*/
}


/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("sidebar").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("sidebar").style.width = "0";
}

addSidebar();
