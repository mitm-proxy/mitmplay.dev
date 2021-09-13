---
sidebar_position: 1
---

# Getting Started

## Install mitm-play
First, download and install the `mim-play` globally: 
```bash
npm install -g mitm-play
```
You can run the `mim-play` to verify that everything is working correctly:
<details><summary><b>mitm-play -h</b></summary>

```bash
Usage: mitm-play [args] [options]

args:
1st for searching url/urls
2nd for loading profile

options:
-h --help       show this help
-u --url        go to specific url
-s --save       save as default <profl>
-r --route      userscript folder routes
-a --activity   rec/replay cache activity*
-b --basic      login to http authentication
-c --clear      clear/delete cache & log(s)
-d --devtools   show chrome devtools on start
-e --device     resize to mobile screen device
-f --fullog     show detail logs on each rule*
-i --insecure   accept insecure cert in nodejs env
-n --nosocket   no websocket injection to html page*
-o --offline    console log withount new-line
-k --cookie     reset cookies expire date*
-l --lazylog    delay ~500ms print logmsg
-g --group      create cache group/rec
-p --csp        relax CSP, unblock websocket*
-t --incognito  set chromium incognito
-w --worker     enable service worker
-x --proxy      a proxy request
-z --lazyclick  delay ~700ms click action*

-D --debug      show ws messages
-G --nogpu      set chromium without GPU
-H --nohost     set logs without host name*
-K --dark       set chrome devtools to dark mode
-N --nice       JSON cache save as human readable
-R --redirect   set redirection: true/false/manual
-S --svelte     build with svelte using rollup
-U --nourl      set logs without URL*
-V --verbose    show more detail of console log
-X --proxypac   set chromium proxypac

-C --chromium   run chromium browser
-F --firefox    run firefox browser
-W --webkit     run webkit browser
...
```
</details>

## Demo routes
This is a quick way to feel how the `mim-play`:

<details><summary><b>mitm-play -SNGdr</b></summary>

```bash
-S --svelte     build with svelte using rollup
-N --nice       JSON cache save as human readable
-G --nogpu      set chromium without GPU
-d --devtools   show chrome devtools on start
-r --route      userscript folder routes
```
</details>

you can exemine **logs** in `Terminal`, `Console` or **functionality** of `mitm-play` ChromePlugins