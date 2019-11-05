let btnGlobal = $("#btnGlobal"),
    modal = $(".modal"),
    closed = $(".close"),
    popup = $(".popup"),
    popupModal1 = $("#popup1"),
    popupModal2 = $("#popup2"),
    popupModal3 = $("#popup3"),

    progress = $(".line__progress"),

    nextTo1 = $("#nextModal1"),
    nextTo2 = $("#nextModal2"),
    nextTo3 = $("#nextModal3"),
    nextTo4 = $("#nextModal4"),
    nextTo5 = $("#nextModal5"),
    nextTo6 = $("#nextModal6"),

    poll1 = $(".poll1"),
    poll2 = $(".poll2"),
    poll3 = $(".poll3"),
    poll4 = $(".poll4"),
    poll5 = $(".poll5"),
    person = $(".percent"),

    btn1 = $("#btn1"),
    btn2 = $("#btn2"),
    btn3 = $("#btn3"),
    btn4 = $("#btn4"),
    btn5 = $("#btn5"),
    btn6 = $("#btn6"),
    btn7 = $("#btn7"),
    btn8 = $("#btn8"),
    btn9 = $("#btn9"),
    btn10 = $("#btn10"),
    btn11 = $("#btn11"),
    btn12 = $("#btn12"),
    btn13 = $("#btn13"),
    btn14 = $("#btn14"),
    btn15 = $("#btn15"),
    btn16 = $("#btn16"),
    btn17 = $("#btn17"),
    btnActive = $(".center-btn_active");

btnGlobal.click(function (event) {
    event.preventDefault();
});

btn1.click(function () {
    $(this).toggleClass("center-btn_active");
    btn2.removeClass("center-btn_active");
    nextTo1.click(function () {
        $('.percent').animate({ num: 40 - 1/* - начало */ }, {
            duration: 1000,
            step: function (num) {
                this.innerHTML = (num + 1).toFixed() + '%'
            }
        });
        poll1.toggleClass("poll1__next");
        poll2.toggleClass("poll2__prev");
        progress.toggleClass("line__progress_40");


    });
});
btn2.click(function () {
    $(this).toggleClass("center-btn_active");
    btn1.removeClass("center-btn_active");
    nextTo1.click(function () {
        $('.percent').animate({ num: 40 - 1/* - начало */ }, {
            duration: 1000,
            step: function (num) {
                this.innerHTML = (num + 1).toFixed() + '%'
            }
        });
        poll1.toggleClass("poll1__next");
        poll2.toggleClass("poll2__prev");
        progress.toggleClass("line__progress_40");


    });

});
btn3.click(function () {
    $(this).toggleClass("center-btn_active");
    btn4.removeClass("center-btn_active");
    btn5.removeClass("center-btn_active");
    nextTo2.click(function () {
        $('.percent').animate({ num: 60 - 1/* - начало */ }, {
            duration: 1000,
            step: function (num) {
                this.innerHTML = (num + 1).toFixed() + '%'
            }
        });
        poll2.toggleClass("poll2__next");
        poll3.toggleClass("poll3__prev");
        progress.toggleClass("line__progress_60");
        popup.addClass("popup__nextBG");
    });
});
btn4.click(function () {
    $(this).toggleClass("center-btn_active");
    btn3.removeClass("center-btn_active");
    btn5.removeClass("center-btn_active");
    nextTo2.click(function () {
        $('.percent').animate({ num: 60 - 1/* - начало */ }, {
            duration: 1000,
            step: function (num) {
                this.innerHTML = (num + 1).toFixed() + '%'
            }
        });
        poll2.toggleClass("poll2__next");
        poll3.toggleClass("poll3__prev");
        progress.toggleClass("line__progress_60");
        popup.addClass("popup__nextBG");
    });
});
btn5.click(function () {
    $(this).toggleClass("center-btn_active");
    btn4.removeClass("center-btn_active");
    btn3.removeClass("center-btn_active");
    nextTo2.click(function () {
        $('.percent').animate({ num: 60 - 1/* - начало */ }, {
            duration: 1000,
            step: function (num) {
                this.innerHTML = (num + 1).toFixed() + '%'
            }
        });
        poll2.toggleClass("poll2__next");
        poll3.toggleClass("poll3__prev");
        progress.toggleClass("line__progress_60");
        popup.addClass("popup__nextBG");
    });
});
btn6.click(function () {
    $(this).toggleClass("center-btn_active");
    btn7.removeClass("center-btn_active");
    btn8.removeClass("center-btn_active");
    nextTo3.click(function () {
        $('.percent').animate({ num: 80 - 1/* - начало */ }, {
            duration: 1000,
            step: function (num) {
                this.innerHTML = (num + 1).toFixed() + '%'
            }
        });
        poll3.toggleClass("poll3__next");
        poll4.toggleClass("poll4__prev");
        progress.toggleClass("line__progress_80");
    });
});
btn7.click(function () {
    $(this).toggleClass("center-btn_active");
    btn6.removeClass("center-btn_active");
    btn8.removeClass("center-btn_active");
    nextTo3.click(function () {
        $('.percent').animate({ num: 80 - 1/* - начало */ }, {
            duration: 1000,
            step: function (num) {
                this.innerHTML = (num + 1).toFixed() + '%'
            }
        });
        poll3.toggleClass("poll3__next");
        poll4.toggleClass("poll4__prev");
        progress.toggleClass("line__progress_80");
    });
});
btn8.click(function () {
    $(this).toggleClass("center-btn_active");
    btn6.removeClass("center-btn_active");
    btn7.removeClass("center-btn_active");
    nextTo3.click(function () {
        $('.percent').animate({ num: 80 - 1/* - начало */ }, {
            duration: 1000,
            step: function (num) {
                this.innerHTML = (num + 1).toFixed() + '%'
            }
        });
        poll3.toggleClass("poll3__next");
        poll4.toggleClass("poll4__prev");
        progress.toggleClass("line__progress_80");
    });
});
btn9.click(function () {
    $(this).toggleClass("center-btn_active");
    btn10.removeClass("center-btn_active");
    btn11.removeClass("center-btn_active");
    btn12.removeClass("center-btn_active");
    btn13.removeClass("center-btn_active");
    btn14.removeClass("center-btn_active");
    nextTo4.click(function () {
        $('.percent').animate({ num: 100 - 1/* - начало */ }, {
            duration: 1000,
            step: function (num) {
                this.innerHTML = (num + 1).toFixed() + '%'
            }
        });
        poll4.toggleClass("poll4__next");
        poll5.toggleClass("poll5__prev");
        progress.toggleClass("line__progress_100");
        popup.removeClass("popup__nextBG");
        popup.addClass("popup__nextBG-finish");
    });
});
btn10.click(function () {
    $(this).toggleClass("center-btn_active");
    btn9.removeClass("center-btn_active");
    btn11.removeClass("center-btn_active");
    btn12.removeClass("center-btn_active");
    btn13.removeClass("center-btn_active");
    btn14.removeClass("center-btn_active");
    nextTo4.click(function () {
        $('.percent').animate({ num: 100 - 1/* - начало */ }, {
            duration: 1000,
            step: function (num) {
                this.innerHTML = (num + 1).toFixed() + '%'
            }
        });
        poll4.toggleClass("poll4__next");
        poll5.toggleClass("poll5__prev");
        progress.toggleClass("line__progress_100");
        popup.removeClass("popup__nextBG");
        popup.addClass("popup__nextBG-finish");
    });
});
btn11.click(function () {
    $(this).toggleClass("center-btn_active");
    btn10.removeClass("center-btn_active");
    btn9.removeClass("center-btn_active");
    btn12.removeClass("center-btn_active");
    btn13.removeClass("center-btn_active");
    btn14.removeClass("center-btn_active");
    nextTo4.click(function () {
        $('.percent').animate({ num: 100 - 1/* - начало */ }, {
            duration: 1000,
            step: function (num) {
                this.innerHTML = (num + 1).toFixed() + '%'
            }
        });
        poll4.toggleClass("poll4__next");
        poll5.toggleClass("poll5__prev");
        progress.toggleClass("line__progress_100");
        popup.removeClass("popup__nextBG");
        popup.addClass("popup__nextBG-finish");
    });
});
btn12.click(function () {
    $(this).toggleClass("center-btn_active");
    btn10.removeClass("center-btn_active");
    btn11.removeClass("center-btn_active");
    btn9.removeClass("center-btn_active");
    btn13.removeClass("center-btn_active");
    btn14.removeClass("center-btn_active");
    nextTo4.click(function () {
        $('.percent').animate({ num: 100 - 1/* - начало */ }, {
            duration: 1000,
            step: function (num) {
                this.innerHTML = (num + 1).toFixed() + '%'
            }
        });
        poll4.toggleClass("poll4__next");
        poll5.toggleClass("poll5__prev");
        progress.toggleClass("line__progress_100");
        popup.removeClass("popup__nextBG");
        popup.addClass("popup__nextBG-finish");
    });
});
btn13.click(function () {
    $(this).toggleClass("center-btn_active");
    btn10.removeClass("center-btn_active");
    btn11.removeClass("center-btn_active");
    btn12.removeClass("center-btn_active");
    btn9.removeClass("center-btn_active");
    btn14.removeClass("center-btn_active");
    nextTo4.click(function () {
        $('.percent').animate({ num: 100 - 1/* - начало */ }, {
            duration: 1000,
            step: function (num) {
                this.innerHTML = (num + 1).toFixed() + '%'
            }
        });
        poll4.toggleClass("poll4__next");
        poll5.toggleClass("poll5__prev");
        progress.toggleClass("line__progress_100");
        popup.removeClass("popup__nextBG");
        popup.addClass("popup__nextBG-finish");
    });
});
btn14.click(function () {
    $(this).toggleClass("center-btn_active");
    btn10.removeClass("center-btn_active");
    btn11.removeClass("center-btn_active");
    btn12.removeClass("center-btn_active");
    btn13.removeClass("center-btn_active");
    btn9.removeClass("center-btn_active");
    nextTo4.click(function () {
        $('.percent').animate({ num: 100 - 1/* - начало */ }, {
            duration: 1000,
            step: function (num) {
                this.innerHTML = (num + 1).toFixed() + '%'
            }
        });
        poll4.toggleClass("poll4__next");
        poll5.toggleClass("poll5__prev");
        progress.toggleClass("line__progress_100");
        popup.removeClass("popup__nextBG");
        popup.addClass("popup__nextBG-finish");
    });
});
btn15.click(function () {
    $(this).toggleClass("center-btn_active");
    btn16.removeClass("center-btn_active");
    btn17.removeClass("center-btn_active");
    nextTo5.click(function () {
        popupModal1.toggleClass("popup_none");
        popupModal2.toggleClass("popup_active");
    });
});
btn16.click(function () {
    $(this).toggleClass("center-btn_active");
    btn15.removeClass("center-btn_active");
    btn17.removeClass("center-btn_active");
    nextTo5.click(function () {
        popupModal1.toggleClass("popup_none");
        popupModal2.toggleClass("popup_active");
    });
});
btn17.click(function () {
    $(this).toggleClass("center-btn_active");
    btn16.removeClass("center-btn_active");
    btn15.removeClass("center-btn_active");
    nextTo5.click(function () {
        popupModal1.toggleClass("popup_none");
        popupModal2.toggleClass("popup_active");
    });
});




btnGlobal.click(function () {
    $('.percent').animate({ num: 20 - 1/* - начало */ }, {
        duration: 1000,
        step: function (num) {
            this.innerHTML = (num + 1).toFixed() + '%'
        }
    });
    modal.toggleClass("modal__open");
    progress.toggleClass("line__progress_20");
});
closed.click(function () {
    modal.removeClass("modal__open");
    progress.removeClass("line__progress_20");
    progress.removeClass("line__progress_40");
    progress.removeClass("line__progress_60");
    progress.removeClass("line__progress_80");
    progress.removeClass("line__progress_100");

    poll1.removeClass("poll1__next");
    poll2.removeClass("poll2__next");
    poll2.removeClass("poll2__prev");
    poll3.removeClass("poll3__next");
    poll3.removeClass("poll3__prev");
    poll4.removeClass("poll4__next");
    poll4.removeClass("poll4__prev");
    poll5.removeClass("poll5__next");
    poll5.removeClass("poll5__prev");

    popupModal1.removeClass("popup_active");
    popupModal1.removeClass("popup_none");
    popupModal2.removeClass("popup_active");
    popupModal2.removeClass("popup_none");
    popupModal3.removeClass("popup_active");
    popupModal3.removeClass("popup_none");

    popup.removeClass("popup__nextBG");
    popup.removeClass("popup__nextBG-finish");


    $('.percent').animate({ num: 0 - 1/* - начало */ }, {
        duration: 1000,
        step: function (num) {
            this.innerHTML = (num + 1).toFixed() + '%'
        }
    });
});

nextTo6.click(function () {
    popupModal2.removeClass("popup_active");
    popupModal3.toggleClass("popup_active");
    // popupModal3.css({ "height": "778px" });
});

