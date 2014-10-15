// FF Bau Web via Typekit
(function(d) {
    var config = {
        kitId: "bwu1cse",
        scriptTimeout: 3000
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='//use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);
// Responsive video
(function () {
    "use strict";
    function responsive_video() {
        var iframe, source, wrapper, video = false;
        [].forEach.call(document.querySelectorAll("iframe"), function (iframe) {
            // Look for <iframe> tags with a youtube/vimeo src attribute
            source = iframe.getAttribute("src");
            if (/.+youtube.com/.test(source)) {
                // iframe.setAttribute("src", source + "?showinfo=0&rel=0");
                video = true;
            } else if (/.+vimeo.com/.test(source)) {
                video = true;
            }
            if (video === true) {
                // Wrap the video
                wrapper = document.createElement("div");
                wrapper.className = 'Video-embed';
                // Append a copy of the iframe
                wrapper.appendChild(iframe.cloneNode(true));
                // Adjust the padding of the iframe to make it responsive
                wrapper.style.paddingTop = (100 * iframe.getAttribute('height') / iframe.getAttribute('width')) + '%';
                iframe.parentNode.replaceChild(wrapper, iframe);
            }
        });
    }
    responsive_video();
}());