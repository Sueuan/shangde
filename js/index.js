$(function () {
    /*第1页*/
    $(".page1 .part_1").addClass('bounceIn1');
    $(".page1 .part_2 ").addClass('fadeInUp_index2');
    //$(".page1 .part_3 ").addClass('bounceInDown1');
    $(".page1 .part_4 ").addClass('bounceInUp1');
    function text7() {
        var index1 = 0;
        var word1 = $(".cc").html();
        var maxlength1 = word1.length;
        //console.log(maxlength1)
        function type() {
            if (index1 > maxlength1) {
                clearInterval(time7)
            }
            $(".page1 .part_3").html(word1.substring(0, index1++))
        }

        time7 = setInterval(type, 100);
    }

    setTimeout(text7, 500);

    /*第2页*/
    $('.page1').swipeUp(function () {
        $("body").css('background-image', 'url(images/page2_bd.png)');
        $(".page").hide();
        $(".page2").show();
        $(".page2 .part_1").addClass('bounceInUp3');
        $(".page2 .part_3").addClass('bounceInUp4');
        function text8() {
            var index1 = 0;
            var word1 = $(".dd").html();
            var maxlength1 = word1.length;
            //console.log(maxlength1)
            function type() {
                if (index1 > maxlength1) {
                    clearInterval(time8)
                }
                $(".page2 .part_2").html(word1.substring(0, index1++))
            }

            time8 = setInterval(type, 100);
        }

        setTimeout(text8, 500);
        function text9() {
            var index1 = 0;
            var word1 = $(".ee").html();
            var maxlength1 = word1.length

            function type() {
                if (index1 > maxlength1) {
                    clearInterval(time9)
                }
                $(".page2 .part_6").html(word1.substring(0, index1++))
            }

            time9 = setInterval(type, 100);

        }

        setTimeout(text9, 2500);

        $(".page2 .part_4").addClass('page2_bq');
        $(".page2 .part_5").addClass('page2_bq2');

        $(".page2 .part_7").addClass('bounceInUp5');


    });
    /*第3页*/


    function page3() {
        $("body").css('background-image', 'url(images/page3_bd.png)');
        $(".page").hide();
        $(".page3").show();
        $(".page3 .part_1").addClass('bounceInUp3');
        $(".page3 .part_3").addClass('bounceInUp4');
        function text8() {
            var index1 = 0;
            var word1 = $(".ff").html();
            var maxlength1 = word1.length;
            //console.log(maxlength1)
            function type() {
                if (index1 > maxlength1) {
                    clearInterval(time10)
                }
                $(".page3 .part_2").html(word1.substring(0, index1++))
            }

            time10 = setInterval(type, 100);
        }

        setTimeout(text8, 500);
        function text9() {
            var index1 = 0;
            var word1 = $(".gg").html();
            var maxlength1 = word1.length

            function type() {
                if (index1 > maxlength1) {
                    clearInterval(time11)
                }
                $(".page3 .part_6").html(word1.substring(0, index1++))
            }

            time11 = setInterval(type, 100);

        }

        setTimeout(text9, 2500);

        $(".page2 .part_4").addClass('page2_bq');
        $(".page2 .part_5").addClass('page2_bq2');

        $(".page2 .part_7").addClass('bounceInUp5');

    }

    $(".page2_cyl").swipeLeft(function () {
        page3()
    });

    $(".page2_cyl").swipeRight(function () {
        page3()
    });

    /*4初到北京*/

    $('.page3').swipeUp(function () {
        $("body").css('background-image', 'url(images/spic_1.png)');

        $(".page").hide();
        $(".index_page").show();
        $("#media").attr("src", "source/1.mp3");
        $(".index_page .part_1").addClass('bounceIn1');
        $(".index_page .part_2 ").addClass('fadeInUp_index2');
        $(".index_page .part_3 ").addClass('bounceInDown1');
        $(".index_page .part_4 ").addClass('bounceInUp1');
        function text1() {
            var index1 = 0;
            var word1 = $(".aa .text1").html();
            var maxlength1 = word1.length;
            //console.log(maxlength1)
            function type() {
                if (index1 > maxlength1) {
                    clearInterval(time1)
                }
                $(".index_page .part_text3 .text1").html(word1.substring(0, index1++))
            }

            time1 = setInterval(type, 100);
        }

        setTimeout(text1, 2200);
        function text2() {
            var index2 = 0;
            var word2 = $(".aa .text2").html();
            var maxlength2 = word2.length;
            //  console.log(maxlength2)
            function type() {
                if (index2 > maxlength2) {
                    clearInterval(time2)
                }
                $(".index_page .part_text3 .text2").html(word2.substring(0, index2++))
            }

            time2 = setInterval(type, 100);
        }

        setTimeout(text2, 2500)
        function text3() {
            var index3 = 0;
            var word3 = $(".aa .text3").html();
            var maxlength3 = word3.length;
            //  console.log(maxlength3)
            function type() {
                if (index3 > maxlength3) {
                    clearInterval(time3)
                }
                $(".index_page .part_text3 .text3").html(word3.substring(0, index3++))
            }

            time3 = setInterval(type, 100);
        }

        setTimeout(text3, 3100);
        function text4() {
            var index1 = 0;
            var word1 = $(".bb .text1").html();
            var maxlength1 = word1.length;
            //  console.log(maxlength1)
            function type() {
                if (index1 > maxlength1) {
                    clearInterval(time4)
                }
                $(".index_page .part_text4 .text1").html(word1.substring(0, index1++))
            }

            time4 = setInterval(type, 100);
        }

        setTimeout(text4, 5000);
        function text5() {
            var index2 = 0;
            var word2 = $(".bb .text2").html();
            var maxlength2 = word2.length;
            //console.log(maxlength2)
            function type() {
                if (index2 > maxlength2) {
                    clearInterval(time5)
                }
                $(".index_page .part_text4 .text2").html(word2.substring(0, index2++))
            }

            time5 = setInterval(type, 100);
        }

        setTimeout(text5, 5300)
        function text6() {
            var index3 = 0;
            var word3 = $(".bb .text3").html();
            var maxlength3 = word3.length;
            // console.log(maxlength3)
            function type() {
                if (index3 > maxlength3) {
                    clearInterval(time6)
                }
                $(".index_page .part_text4 .text3").html(word3.substring(0, index3++))
            }

            time6 = setInterval(type, 100);
        }

        setTimeout(text6, 5900)
        setTimeout(function () {
            $(".index_page .part_5").fadeIn()

        }, 6500)
        setTimeout(function () {
            $(".index_page .part_4").removeClass('bounceInUp1');
            $(".index_page .part_4").addClass('flash1');
            $(".index_page .part_text4").addClass('flash1');
            $(".index_page .part_3").removeClass('bounceInDown1');
            $(".index_page .part_3").addClass('flash2');
            $(".index_page .part_text3").addClass('flash2');
        }, 7500)
    });
    /*第5页效果*/
    $(".btn_4").on("tap", function () {
        $("body").css('background-image', 'url(images/market.png)');
        $("#media").attr("src", "source/2.mp3");
        $(".page").hide();
        $(".market_page").show();
        $(".market_page .part_1").addClass('animated bounceInLeft');
        $(".market_page .part_3,.market_page .part_text3").addClass('flipInX1');
        $(".market_page .part_2").addClass(' animated  lightSpeedIn');
        /* setTimeout(function () {
         $(".market_page .part_3,.market_page .part_text3").removeClass('flipInX1');
         $(".market_page .part_3,.market_page .part_text3").addClass('demo1');
         }, 1000)*/
    });
    /*第6页效果*/
    $('.market_page').swipeUp(function () {
        $("body").css('background-image', 'url(images/ms_page.png)');
        $("#media").attr("src", "source/3.mp3");
        $(".page").hide();
        $(".mianshi_page").show();
        $(".mianshi_page .part_1").addClass('animated rotateIn');
        $(".mianshi_page .part_2").addClass('animated bounceInRight');
        $(".mianshi_page .part_3").addClass('animated bounceInLeft');
    });
    /*第7页效果*/
    $('.mianshi_page').swipeUp(function () {
        $("body").css('background-image', 'url(images/office.png)');
        $("#media").attr("src", "source/4.mp3");
        $(".page").hide();
        $(".office_page").show();
        $(".office_page .part_1").addClass('animated pulse');
        $(".office_page .part_2").addClass('bounceIn2');
        $(".office_page .part_3,.office_page .part_text3").addClass('rotateInUpLeft1 ');
        setTimeout(function () {
            $(".office_page .part_3,.office_page .part_text3").removeClass('rotateInUpLeft1');
            $(".office_page .part_3,.office_page .part_text3").addClass('demo1');
        }, 1000)
    })
    /*8学历困扰*/
    $(".btn_7").on("tap", function () {
        $("body").css('background-image', 'url(images/xueli_page.png)');
        $("#media").attr("src", "source/5.mp3");
        $(".page").hide();
        $(".xueli_page").show();
        $(".xueli_page .part_1").addClass('animated  flipInX');
        $(".xueli_page .part_2").addClass('fadeInDown2');
        $(".xueli_page .part_3").addClass('tada2');
    })
    /*9天桥迷茫*/
    $('.xueli_page').swipeUp(function () {

        $("body").css('background-image', 'url(images/bridge.png)');
        $("#media").attr("src", "source/6.mp3");
        $(".page").hide();
        $(".bridge_page").show();
        $(".bridge_page .part_2 .text1").addClass('fadeInRight1');
        $(".bridge_page .part_2 .text2").addClass('fadeInRight2');
        $(".bridge_page .part_2 .text3").addClass('fadeInRight3');
        $(".bridge_page .part_2 .text4").addClass('fadeInRight4');
        $(".bridge_page .part_3,.bridge_page .part_text3").addClass('rotateIn1');
        $(".bridge_page .part_4,.bridge_page .part_text4").addClass('rotateIn2');
        setTimeout(function () {
            $(".bridge_xz").show()
            $(".bridge_xz").addClass('demo3');
            $(".bridge_page .part_3,.bridge_page .part_text3").removeClass('rotateIn1');
            $(".bridge_page .part_4,.bridge_page .part_text4").removeClass('rotateIn2');
            $(".bridge_page .part_3,.bridge_page .part_text3").addClass(' animated pulse');
            $(".bridge_page .part_4,.bridge_page .part_text4").addClass('animated pulse');
        }, 4000)
    });
    /*10人生感悟*/
    $(".btn_9").on("tap", function () {
        $("body").css('background-image', 'url(images/ganwu_page.png)');
        $("#media").attr("src", "source/7.mp3");
        $(".page").hide();
        $(".ganwu_page").show();
        $(".ganwu_page .part_1").addClass('tada1');
        $(".ganwu_page .part_2").addClass('fadeInDown2');
        $(".ganwu_page .part_3").addClass('fadeInRight5');
        $(".ganwu_page .part_4").addClass('tada1');
    });
    /*11考取本科*/
    //$(".ganwu_page .part_5").longTap(function () {
    //
    //    $("body").css('background-image', 'url(images/benke.png)')
    //    $("#media").attr("src", "source/8.mp3");
    //    $(".page").hide();
    //    $(".benke_page").show();
    //    $(".benke_page .part_1").addClass('animated rotateIn');
    //    $(".benke_page .part_2").addClass('fadeInDown2');
    //    $(".benke_page .part_3").addClass('tada3');
    //    $(".benke_page .part_4").addClass('tada3');
    //})
    var aaa=document.getElementsByClassName("ganwu_page")[0];
    var bbb=aaa.getElementsByClassName("part_5")[0];
   bbb.ontouchend=function () {
        $("body").css('background-image', 'url(images/benke.png)')
        $("#media").attr("src", "source/8.mp3");
        $(".page").hide();
        $(".benke_page").show();
        $(".benke_page .part_1").addClass('animated rotateIn');
        $(".benke_page .part_2").addClass('fadeInDown2');
        $(".benke_page .part_3").addClass('tada3');
        $(".benke_page .part_4").addClass('tada3');
    }

    /*12使用场景*/
    $(".benke_page").swipeUp(function () {
        $("body").css({'background-color': '#fff)',"background-image":"none"});
        $("#media").attr("src", "source/9.mp3");
        $(".page").hide();
        $(".cj_page").show();
        $(".cj_page .part_1").addClass('bounceInRight1');
        $(".cj_page .part_2").addClass('bounceInLeft1');
        $(".cj_page .part_3").addClass('bounceInRight2');
        $(".cj_page .part_4").addClass('bounceInLeft2');
    })
    /*13新办公环境*/
    $(".cj_page").swipeUp(function () {

        $(".page").hide();
        $(".huanjing_page").show();
        $("#media").attr("src", "source/10.mp3");
        $(".huanjing_page .part_1").addClass('animated  rotateInDownRight');
        $(".huanjing_page .part_2").addClass('animated bounceInRight');
        $(".huanjing_page .part_3").addClass('animated swing2');
    });
    /*14居住公寓*/
    $(".cj_page").swipeUp(function () {
        $("body").css('background-image', 'url(images/gongyu_page.png)');

        $(".page").hide();
        $(".gongyu_page").show();
        $("#media").attr("src", "source/11.mp3");
        $(".gongyu_page .part_1 .tetx1").addClass('gongyu_page1');
        $(".gongyu_page .part_1 .tetx2").addClass('gongyu_page2');
        $(".gongyu_page .part_1 .tetx3").addClass('gongyu_page3');
        $(".gongyu_page .part_1 .tetx4").addClass('gongyu_page4');
        $(".gongyu_page .part_1 .tetx5").addClass('gongyu_page5');
        $(".gongyu_page .part_2").addClass('bounceInLeft');
        $(".gongyu_page .part_3").addClass('tada1');
    });
    /*15商城*/
    $(".gongyu_page").swipeUp(function () {
        $("body").css('background-image', 'url(images/shop_page.png)');
        $("#media").attr("src", "source/12.mp3");
        $(".page").hide();
        $(".shop_page").show();
        $(".shop_page .part_1 ").addClass('bounceInUp1');
        $(".shop_page .part_2").addClass('fadeInDown2');
        $(".shop_page .part_3").addClass('tada1');
    });
    /*16榜样*/
    $(".shop_page .part_3").on("tap", function () {
        $("body").css({'background-color': '#fff)',"background-image":"none"});
        $("#media").attr("src", "source/music.mp3");
        $(".page").hide();
        $(".page").hide();
        $(".bangyang_page").show();
        $(".bangyang_page .part_1 ").addClass('animated bounceInDown');
        $(".bangyang_page .part_2 .part_2_1").addClass('animated bounceInRight');
        $(".bangyang_page .part_2 .part_2_2").addClass('animated bounceInLeft');
        $(".bangyang_page .part_3").addClass('animated bounceInRight');
        $(".bangyang_page .part_4").addClass('animated bounceInLeft');
        $(".bangyang_page .part_5 .part_5_1").addClass('animated bounceInLeft');
        $(".bangyang_page .part_5 .part_5_2").addClass('animated bounceInRight');
        $(".bangyang_page .part_6").addClass('animated bounceInRight');
        $(".bangyang_page .part_7").addClass('animated bounceInLeft');
    });
    /*17互动*/
    $(".bangyang_page").swipeUp(function () {
        $("body").css('background-image', 'url(images/hudong_bd.png)');
        $(".page").hide();
        $(".hudong_page").show();
        $(".hudong_page .part_1 ").addClass('animated bounceIn');
        $(".hudong_page .part_2").addClass('animated bounceIn');
        $(".hudong_page .part_3").addClass('animated bounceIn');
        $(".hudong_page .part_4").addClass('animated bounceIn');
        $(".hudong_page .part_5").addClass('animated bounceIn');
        $(".hudong_page .part_6").addClass('animated bounceIn');
        $(".hudong_page .part_7").addClass('animated bounceIn');
        $(".hudong_page .part_8").addClass('animated bounceIn');
        $(".hudong_page .part_9").addClass('animated bounceIn');
    });
    $(".hudong_page").swipeUp(function () {
        $(".yindao").show()
        $(".yindao").removeClass('fadeOutDownBig');
        $(".yindao").removeClass('fadeInUpBig');
        $(".yindao").addClass('animated fadeInUpBig');
    });
    $(".yindao").swipeDown(function () {
        $(".yindao").removeClass('fadeOutDownBig');
        $(".yindao").removeClass('fadeInUpBig');
        $(".yindao").addClass('animated fadeOutDownBig');
        $(".yindao").hide()
    });
    /*手机端无法自动播放音乐解决方法*/
    //第一次触摸屏幕开始播放音乐
    var flag = 1;
    $('html').on('touchstart', function () {
        if (flag == 1) {
            $('#media')[0].play();
            flag = 2;
        }
    });
    /*播放，停止按钮*/
    $('.off').on("tap", function () {
        if ($('#media')[0].paused) {
            $('#media')[0].play();
            $("#audio_btn").addClass("rotate");
            $("#audio_btn").css("background-image", "url(images/music.png) ")
        } else {
            $('#media')[0].pause();
            $("#audio_btn").removeClass("rotate")
            $("#audio_btn").css("background-image", "url(images/music_1.png) ")
        }
    })
})
