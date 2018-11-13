<template>
    <div class="weui-panel weui-panel_access">
        <div class="weui-panel__bd">
            <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                <div class="equipment-image">
                    <img class="weui-media-box__thumb" src="http://back.auto888.com.cn/upload/titleimg/9aea47db-46c8-4.png" alt="">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">身份证自助取证机</h4>
                    <p class="weui-media-box__desc">
                        <span>型号: </span>
                        <span>KHNQD-81283E911</span>
                    </p>
                    <p class="weui-media-box__desc">
                        <span>产地: </span>
                        <span>浙江省杭州市余杭区</span>
                    </p>
                    <p class="weui-media-box__desc">
                        <span>容量: </span>
                        <span>卡式 200 卡式 400</span>
                    </p>
                    <p class="weui-media-box__desc">
                        <span>出厂日期: </span>
                        <span>2018年11月13日</span>
                    </p>
                </div>
            </a>
        </div>
        <div class="weui-panel__ft">
            <a class="weui-btn weui-btn_mini">
                <i class="iconfont"></i>
                <span>详细资料</span>
            </a>
            <a class="weui-btn weui-btn_mini">
                <i class="iconfont"></i>
                <span>报修</span>
            </a>
        </div>
    </div>
</template>

<style lang="less" scoped>
h4 {
    font-size: 1em;
    font-weight: 600;
    padding-bottom: 1rem;
    overflow: visible;
}
.weui-media-box__desc {
    font-size: 14px;
    white-space: nowrap;
    line-height: 1.5;
    padding: 3px 0;
    color: #24292e;
    span:first-child {
        font-weight: bold;
    }
}
.equipment-image {
    width: 35%;
    height: 30%;
    margin-right: 20px;
}
.weui-media-box:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #949494;
    color: #949494;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    left: 20px;
    z-index: 2;
}
.weui-panel__ft {
    padding-left: 15px;
    padding-bottom: 5px;
    a {
        color: #24292e;
        font-weight: 500;
        font-size: 15px;     
        line-height: 35px;       
        border-radius: 10px;
        padding: 0 1em;
        &:after{
            border: none;
        }
        &:hover {
            background-color: rgba(0, 0, 0, 0.1);
        }
        &:last-child {
            margin-top: 0;
            margin-right: 15px;
            float: right;
        }
        .iconfont {
            color: #67baff;
        }
        span {
            padding-left: 0.5rem;
            vertical-align: top;
        }
    }
}    
</style>