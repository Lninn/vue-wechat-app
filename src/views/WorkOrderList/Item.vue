<template>
    <div class="weui-panel weui-panel_access">
        <div class="weui-panel__bd">
            <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{ workorder.workorderNumber }}</h4>
                    <p class="weui-media-box__desc">
                        <span>设备编号: </span>
                        <span>{{ workorder.deviceNumber }}</span>
                    </p>
                    <p class="weui-media-box__desc">
                        <span>上报时间: </span>
                        <span>{{ workorder.date }}</span>
                    </p>
                    <!-- <p class="weui-media-box__desc wx-fault-description">
                        <span>故障描述: </span>
                        <span>{{ workorder.describe }}</span>
                    </p> -->
                    <p class="weui-media-box__desc">
                        <span>状态: </span>
                        <span>{{ workorder.state }}</span>
                    </p>
                </div>
                <div class="weui-media-box__hd product-img">
                    <img class="weui-media-box__thumb" src="@/assets/quzhengji.jpg" alt="">
                </div>
            </a>
        </div>
        <div class="weui-panel__ft">
            <router-link :to="'/workorders/' + workorder.id" class="weui-btn weui-btn_mini wx-btn">
                <i class="iconfont"></i>
                <span>查看详情</span>
            </router-link>
            <router-link to="/received" class="weui-btn weui-btn_mini wx-btn">
                <i class="iconfont"></i>
                <span>确认完成</span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Item',
    props: {
        workorder: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style lang="less" scoped>
.weui-panel__bd {
    a.weui-media-box {
        .weui-media-box__bd {
            h4.weui-media-box__title {
                font-size: 1em;
                padding-bottom: 1rem;
                overflow: visible;
            }
            .weui-media-box__desc {
                // padding: .2em 0;
                font-size: 14px;
                white-space: nowrap;
                line-height: 1.5;
            }
        }
        .weui-media-box__hd {
            width: 30%;
            height: 30%;
            margin-right: 0;
        }
    }
}

.wx-btn {
    color: rgba(0, 0, 0, 0.8);;
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
    span {
        vertical-align: top;
        padding-left: 5px;
    }
}

.iconfont {
    color: #67baff;
    font-size: 1.2em;
}
</style>