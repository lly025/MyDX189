window.onload = function () {
    let t1
    let index = 0
    let banner_img = document.getElementsByClassName('banner_img1')
    let lis = document.getElementsByClassName('lis')
    let banner = document.getElementById('banner_img')
    // 轮播图定时器方法
    function start() {
        t1 = setInterval(function () {
            index++
            if (index > 4) index = 0
            for (let i = 0; i < banner_img.length; i++) {
                if (i == index) {
                    banner_img[i].style.display = 'block'
                    lis[i].style.backgroundColor = '#fff'
                } else {
                    banner_img[i].style.display = 'none'
                    lis[i].style.backgroundColor = 'transparent'
                }
            }
        }, 5000)
    }
    // 鼠标移入li执行相应轮播
    for (let i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            for (let j = 0; j < lis.length; j++) {
                banner_img[j].style.display = 'none'
                lis[j].style.backgroundColor = 'transparent'
            }
            index = i
            banner_img[i].style.display = 'block'
            lis[i].style.backgroundColor = '#fff'
        }
    }
    // 清除轮播定时器方法
    function stop() {
        clearInterval(t1)
    }
    // 鼠标移入停止轮播
    banner.onmouseover = function () {
        stop()
    }
    // 鼠标移出继续轮播
    banner.onmouseout = function () {
        start()
    }
    start()
    // 轮播图右边服务上一页下一页功能
    let prev = document.getElementById('prev')
    let pr = 0
    let next = document.getElementById('next')
    let box_ul = document.getElementById('box_ul')
    let tf = true
    // 点击上一页按钮调用切换上一页函数
    prev.onclick = function () {
        prev_img(-224)
    }
    // 实现切换页面（动画调左边距跟定时器）
    function prev_img(ml) {
        if (tf == true) {
            if (pr == 1) {
                tf = false
                box_ul.animate({
                    marginLeft: ml - 224 + 'px'
                }, {
                    duration: 300,
                })
                setTimeout(function () {
                    box_ul.style.marginLeft = '0px'
                }, 300)
                pr = 0
                setTimeout(function () {
                    tf = true
                }, 300)
            } else {
                tf = false
                box_ul.animate({
                    marginLeft: ml + 'px'
                }, {
                    duration: 300,
                })
                setTimeout(function () {
                    box_ul.style.marginLeft = ml + 'px'
                }, 300)
                pr++
                setTimeout(function () {
                    tf = true
                }, 300)
            }
        }
    }
    // 点击下一页按钮调用切换下一页函数
    next.onclick = function () {
        next_img(224)
    }
    // 实现切换页面（动画调左边距跟定时器）
    function next_img(ml) {
        if (tf == true) {
            if (pr == 1) {
                tf = false
                box_ul.animate({
                    marginLeft: ml - 224 + 'px'
                }, {
                    duration: 300,
                })
                setTimeout(function () {
                    box_ul.style.marginLeft = '0px'
                }, 300)
                pr = 0
                setTimeout(function () {
                    tf = true
                }, 300)
            } else {
                tf = false
                box_ul.style.marginLeft = '-448px'
                box_ul.animate({
                    marginLeft: -ml + 'px'
                }, {
                    duration: 300,
                })
                setTimeout(function () {
                    box_ul.style.marginLeft = -ml + 'px'
                }, 300)
                pr++
                setTimeout(function () {
                    tf = true
                }, 300)
            }
        }
    }
    // 欢享服务、超值购
    let hxfw = document.getElementById('hxfw')
    let czg = document.getElementById('czg')
    let r_s_t_c_content1 = document.getElementById('r_s_t_c_content1')
    let r_s_t_c_content2 = document.getElementById('r_s_t_c_content2')
    let czg_span = document.getElementById('czg_span')
    let hxfw_span = document.getElementById('hxfw_span')
    hxfw.onmouseover = function () {
        czg.style.color = '#777777'
        this.style.color = '#FF8201'
        r_s_t_c_content1.style.display = 'block'
        r_s_t_c_content2.style.display = 'none'
        czg_span.classList.remove('czg_span')
        czg_span.classList.add('czg_span0')
        hxfw_span.classList.remove('hxfw_span')
        hxfw_span.classList.add('hxfw_span0')
    }
    czg.onmouseover = function () {
        hxfw.style.color = '#777777'
        this.style.color = '#FF8201'
        r_s_t_c_content1.style.display = 'none'
        r_s_t_c_content2.style.display = 'block'
        czg_span.classList.add('czg_span')
        czg_span.classList.remove('czg_span0')
        hxfw_span.classList.add('hxfw_span')
        hxfw_span.classList.remove('hxfw_span0')
    }
    // 银行卡、卡密充值按钮
    let rad = document.getElementsByName('cz')
    let cz0 = document.getElementById('cz0')
    let cz1 = document.getElementById('cz1')
    let span_m1 = document.getElementById('span_m1')
    let span_m2 = document.getElementById('span_m2')
    let inp_1 = document.getElementById('inp-1')
    let inp_2 = document.getElementById('inp-2')
    let czzq = document.getElementById('czzq')
    if (rad[0].checked == true) cz0.style.color = '#FF8201'
    rad[0].onclick = function () {
        getYzm()
        if (this.checked == true) {
            cz0.style.color = '#FF8201'
            cz1.style.color = '#777777'
            span_m1.style.display = 'inline'
            inp_1.style.display = 'inline'
            span_m2.style.display = 'none'
            inp_2.style.display = 'none'
            czzq.style.display = 'none'
        }
    }
    rad[1].onclick = function () {
        getYzm()
        if (this.checked == true) {
            cz0.style.color = '#777777'
            cz1.style.color = '#FF8201'
            span_m2.style.display = 'inline'
            inp_2.style.display = 'inline'
            span_m1.style.display = 'none'
            inp_1.style.display = 'none'
            czzq.style.display = 'inline'
        }
    }
    // 验证码
    let yzm = document.getElementById('yzm')
    function getYzm() {
        // 就随机来一个背景颜色吧
        let color
        // 会出现的验证码
        let yzm_arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
            'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E',
            'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
            'U', 'V', 'W', 'X', 'Y', 'Z']
        // 放四位验证码的数组
        let ran_arr = new Array(4)
        for (let i = 0; i < ran_arr.length; i++) {
            color = parseInt(Math.random() * 4)
            // 得到随机验证码
            ran_arr[i] = yzm_arr[parseInt(Math.random() * yzm_arr.length)]
        }
        // 将随机验证码转成字符串然后显示在相应位置
        // jion是以括号里对应的字符分割数组中的元素变为字符串，默认逗号
        // toString是以逗号分割
        yzm_str = ran_arr.join(' ')
        if (color == 0) {
            yzm.style.color = 'red'
        } else if (color == 1) {
            yzm.style.color = 'green'
        } else if (color == 2) {
            yzm.style.color = 'blue'
        } else {
            yzm.style.color = 'pink'
        }
        yzm.innerText = yzm_str
    }
    getYzm()
    // 点击切换电信欢go网跟合作伙伴
    let dxhgw = document.getElementById('dxhgw')
    let hzhb = document.getElementById('hzhb')
    let lj_footer = document.getElementById('lj_footer')
    let lj_footer1 = document.getElementById('lj_footer1')
    dxhgw.onclick = function () {
        this.style.fontWeight = "bold"
        hzhb.style.fontWeight = "initial"
        lj_footer.style.display = 'block'
        lj_footer1.style.display = 'none'
    }
    hzhb.onclick = function () {
        this.style.fontWeight = "bold"
        dxhgw.style.fontWeight = "initial"
        lj_footer.style.display = 'none'
        lj_footer1.style.display = 'block'
    }
    // 显示区域欢go网
    let xiangxia = document.getElementById('xiangxia')
    let xiangshang = document.getElementById('xiangshang')
    xiangxia.onclick = function () {
        this.style.display = 'none'
        xiangshang.style.display = 'inline'
        document.getElementById('lj_footer').style.height = 'auto';
    }
    xiangshang.onclick = function () {
        this.style.display = 'none'
        xiangxia.style.display = 'inline'
        document.getElementById('lj_footer').style.height = '70px';
    }
}