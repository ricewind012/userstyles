# userstyles
None of them work as is, as they are intended to be used all at once.

You'll have to declare the variables **in an another userstyle** for the same domain as the userstyle(s) you are installing, so you don't lose them if the styles ever update. Example [here](../../raw/master/_global.user.css).

If you wish to resize the sidebar(s) with a mouse, install [this userscript](../../raw/master/_global-resize-sidebar.user.js).

## Requirements
[4chan](../../raw/master/4chan.user.styl): [4chan X](https://www.4chan-x.net)

[Discord](../../raw/master/discord.user.styl): [class normalisation userscript](../../raw/master/discord-normalise-classes.user.js)

[GitHub](../../raw/master/github.user.styl), [SoundCloud](../../raw/master/soundcloud.user.styl): being logged in

[Reddit](../../raw/master/reddit.user.styl): put the following in uBlock Origin's "My filters":
```adb
! reddit
!! no subreddit css
||thumbs.redditmedia.com$stylesheet,domain=old.reddit.com
!! no sticky header
old.reddit.com##+js(set-constant.js, isPinned, true)
```

## Preview
They all share the same style, and it depends on how you edited the variables above.
![GitHub preview](https://user-images.githubusercontent.com/58827198/211355929-94b5113f-bc8e-47b1-a1da-64dcd034c9ea.png)
