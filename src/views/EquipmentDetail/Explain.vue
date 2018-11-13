<template>
    <div class="weui-panel weui-panel_access">
        <div class="weui-panel__bd">
            <div class="weui-media-box weui-media-box_text" id="equipment-information">
                <h4 class="weui-media-box__title" name="name">测试设备名称</h4>
                <p class="weui-media-box__desc">
                    <span>型号: </span>
                    <span name="model">设备编号</span>
                </p>
                <p class="weui-media-box__desc">
                    <span>出厂日期: </span>
                    <span name="date">2018/11/1 12:45:59</span>
                </p>
                <p class="weui-media-box__desc">
                    <span>产地: </span>
                    <span name="address">生产地址</span>
                </p>
            </div>

            <div class="weui-flex">
                <div class="weui-flex__item">
                    <div class="server-item">
                        <i class="iconfont"></i> 1 年保质
                    </div>
                </div>
                <div class="weui-flex__item">
                    <div class="server-item">
                        <i class="iconfont"></i> 2 小时响应
                    </div>
                </div>
                <div class="weui-flex__item">
                    <div class="server-item">
                        <i class="iconfont"></i> 7 * 24 小时
                    </div>
                </div>
            </div>

            <div class="server">
                <p class="weui-media-box__desc server-word">服务 本产品由 <span class="company">博月科技</span> 负责发货和提供服务</p>
            </div>

        </div>
    </div>
</template>

<style lang="less" scoped>
.weui-panel:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid transparent;
    color: transparent;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
}

#equipment-information {
    padding-left: 2rem;
    p {
        line-height: 1.5;
        color: rgba(0, 0, 0, 0.9);
        font-size: 15px;
    }
}

.weui-media-box__title {
    font-weight: 600;
    font-size: 1em;
}
.equipment-information p {
    padding-bottom: 10px;
    margin-left: 1.1em;
}
.server-item {
    text-align: center;
    font-size: .8em;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.server {
    padding: 10px 0;
}
.server-word {
    text-align: center;
    padding: 5px 0;
}
.server-word .company {
    font-weight: bold;
}
</style>