/* This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>. */

/* ==UserScript==
@name           destiny.gg: Add popout chat to navbar
@description    Add a navigation item to open popout chat on destiny.gg.
@match          *://www.destiny.gg/*
@exclude-match  *://www.destiny.gg/embed/*
@author         johbi
@version        0.0.1
@run-at         document-end
@updateURL      https://github.com/PunishedJohbi/destinygg-nav-chat/raw/main/userscript.js
@downloadURL    https://github.com/PunishedJohbi/destinygg-nav-chat/raw/main/userscript.js
==/UserScript== */

let navItem = document.createElement("li");
navItem.className = "nav-item";

let navLink = document.createElement("a");
let linkText = document.createTextNode("Chat");
navLink.appendChild(linkText);
navLink.className = "nav-link";
navLink.title = "Chat";
navLink.href = "/embed/chat";

navItem.appendChild(navLink);

let menu = document.getElementById("collapsemenu");
let nav = menu.firstElementChild;

nav.appendChild(navItem);
