const newsSection = document.getElementsByClassName("news-window")[0];
const mitgliederSection = document.getElementsByClassName("mitglieder-window")[0];
const offenMitglieder = document.getElementById("mitglieder-open");
const erfolgeSection = document.getElementsByClassName("erfolge-window")[0];
const homeSection = document.getElementsByClassName("home-window")[0];
const aleksInfo = "";
const canInfo = "";
const davidInfo = "";
const lasseInfo = "";
const leonInfo = "Moin, ich bin Leon. Aktuell sind meine Aufgaben im Team fließend, ich helfe und koordiniere die Forschung allerdings helfe ich auch, wenn ich kann beim Roboterbau oder der Programmierung!";
const malteInfo = "";
const marvinInfo = "";
const mertenInfo = "";
const philippInfo = "";
function openMember(member) {
    document.getElementById("mitglieder-open").classList.remove("hide");
    document.getElementsByClassName("open-name")[0].innerHTML = member;
    if (member == "Aleksandar") {
        document.getElementsByClassName("open-img")[0].src = "";
        document.getElementsByClassName("open-info")[0].innerHTML = aleksInfo;
    } else if (member == "Can") {
        document.getElementsByClassName("open-img")[0].src = "";
        document.getElementsByClassName("open-info")[0].innerHTML = canInfo;
    }  else if (member == "David") {
        document.getElementsByClassName("open-img")[0].src = "";
        document.getElementsByClassName("open-info")[0].innerHTML = davidInfo;
    }  else if (member == "Lasse") {
        document.getElementsByClassName("open-img")[0].src = "";
        document.getElementsByClassName("open-info")[0].innerHTML = lasseInfo;
    }  else if (member == "Leon") {
        document.getElementsByClassName("open-img")[0].src = "";
        document.getElementsByClassName("open-info")[0].innerHTML = leonInfo;
        document.getElementById("open-link-tt").classList.add("hide");
        document.getElementById("open-link-insta").href = "https://www.instagram.com/leontm.official/";
        document.getElementById("open-link-ttv").href = "https://twitch.tv/dcx_leontm";
        document.getElementById("open-link-git").href = "https://github.com/leontm-official";
        document.getElementById("open-link-yt").href = "https://www.youtube.com/channel/UClUsuSmrvN3WkN0fu7g_vVA";
    }  else if (member == "Malte") {
        document.getElementsByClassName("open-img")[0].src = "";
        document.getElementsByClassName("open-info")[0].innerHTML = malteInfo;
    }  else if (member == "Marvin") {
        document.getElementsByClassName("open-img")[0].src = "";
        document.getElementsByClassName("open-info")[0].innerHTML = marvinInfo;
    }  else if (member == "Merten") {
        document.getElementsByClassName("open-img")[0].src = "";
        document.getElementsByClassName("open-info")[0].innerHTML = mertenInfo;
    }  else if (member == "Philipp") {
        document.getElementsByClassName("open-img")[0].src = "";
        document.getElementsByClassName("open-info")[0].innerHTML = philippInfo;
    }
};
function goToInstagram() {
    window.location.href = "https://www.instagram.com/wgm.vikings/";
};
function openErfolge() {
    document.getElementsByClassName("erfolge-window")[0].classList.remove("hide");
    if (document.getElementsByClassName("home-window")[0].classList.contains("hide")) {
        document.getElementsByClassName("home-window")[0].classList.add("hide");
    } else if (!document.getElementsByClassName("mitglieder-window")[0].classList.contains("hide")) {
        document.getElementsByClassName("mitglieder-window")[0].classList.add("hide");
        document.getElementsByClassName("mitglieder-open")[0].classList.add("hide");
    } else if (!document.getElementsByClassName("news-window")[0].classList.contains("hide")) {
        document.getElementsByClassName("news-window")[0].classList.add("hide");
    };
};
function openTeam() {
    document.getElementsByClassName("mitglieder-window")[0].classList.remove("hide");
    if (document.getElementsByClassName("home-window")[0].classList.contains("hide")) {
        document.getElementsByClassName("home-window")[0].classList.add("hide");
    } else if (!document.getElementsByClassName("erfolge-window")[0].classList.contains("hide")) {
        document.getElementsByClassName("erfolge-window")[0].classList.add("hide");
    } else if (!document.getElementsByClassName("news-window")[0].classList.contains("hide")) {
        document.getElementsByClassName("news-window")[0].classList.add("hide");
    };
};
function openNews() {
    document.getElementsByClassName("erfolge-window")[0].classList.remove("hide");
    if (document.getElementsByClassName("home-window")[0].classList.contains("hide")) {
        document.getElementsByClassName("home-window")[0].classList.add("hide");
    } else if (!document.getElementsByClassName("mitglieder-window")[0].classList.contains("hide")) {
        document.getElementsByClassName("mitglieder-window")[0].classList.add("hide");
        document.getElementsByClassName("mitglieder-open")[0].classList.add("hide");
    } else if (!document.getElementsByClassName("erfolge-window")[0].classList.contains("hide")) {
        document.getElementsByClassName("erfolge-window")[0].classList.add("hide");
    };
};