const navSlideController = {
    nav() {
        window.onscroll = function(){
            var scrollTop = document.documentElement.scrollTop;
            if(scrollTop > Top.offsetHeight){
                if(nav.className == ""){
                    nav.className = "active";//赋值
                }
            }else{
                if(nav.className == "active"){
                    nav.className = "";
                }
            }
        }
    }
}

module.exports = navSlideController