## Anant Blue Theme

A Theme for frappe desk

## Install app
use the following commands to install this app  
First get it from this repo

```
bench get-app anant_blue_theme https://github.com/nitin-anantpranali/anant_blue_theme
```
add to your site
```
bench --site [site name] install-app anant_blue_theme
```
start the frappe app
```
bench --site [site name] clear-cache
bench start
```

## Uninstall app
```
bench --site [site name] remove-from-installed-apps anant_blue_theme  
bench remove-app anant_blue_theme  
```

NOTE that this leaves behind an entry in DB thats prevents it from being added again. You can force add it or remove that entry to add it again (table: tabModule Def).
