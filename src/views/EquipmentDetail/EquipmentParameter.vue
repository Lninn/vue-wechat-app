<template>
   <div id="parameter" class="weui-panel weui-panel_access">
       <div class="weui-panel__bd">
           <div class="weui-media-box weui-media-box_text informations">
            <h4 class="weui-media-box__title" data-id="18255d4f-b795-4cf5-86ee-3ade2d8addbe"> 系统功能 </h4>

            <ul class="weui-media-box__info" data-id="1d258599-bfcc-4db1-9f48-7c4ddce7eeb0">
            <li class="weui-media-box__info__meta">拍照摄像头	</li>
            <li class="weui-media-box__info__meta weui-media-box__info__meta-msg">800W 像素，自动对焦</li>
            </ul>

            <ul class="weui-media-box__info" data-id="1dc4c2fc-6e58-4cb6-b033-2c49f25f28e5">
            <li class="weui-media-box__info__meta">身份证阅读器	</li>
            <li class="weui-media-box__info__meta weui-media-box__info__meta-msg">内置二代身份证读卡器安全模块、由公安部认证许可。符合中国第二代身份证阅读设备标准</li>
            </ul>

            <ul class="weui-media-box__info" data-id="26ca4d13-73bf-48b3-8771-333987a80f03">
            <li class="weui-media-box__info__meta">音响系统	</li>
            <li class="weui-media-box__info__meta weui-media-box__info__meta-msg">双声道输出，带物理条件开关</li>
            </ul>

            <ul class="weui-media-box__info" data-id="2f277c83-c7c0-4d4a-a0be-d94f916dacdc">
            <li class="weui-media-box__info__meta">工作时间	</li>
            <li class="weui-media-box__info__meta weui-media-box__info__meta-msg">24 小时自助服务</li>
            </ul>

            <ul class="weui-media-box__info" data-id="8df1f23b-c4d6-42ff-8fd4-9df72dbf7e96">
            <li class="weui-media-box__info__meta">签名版模块	</li>
            <li class="weui-media-box__info__meta weui-media-box__info__meta-msg">微压传感技术、压力感应2048级</li>
            </ul>

            <ul class="weui-media-box__info" data-id="9940c46d-007a-4e4b-9acf-44511a8eb643">
            <li class="weui-media-box__info__meta">扫描模块	</li>
            <li class="weui-media-box__info__meta weui-media-box__info__meta-msg">智能扫描你模块</li>
            </ul>

            <ul class="weui-media-box__info" data-id="ab086779-ade2-4988-b6d2-a0ff3ccdcc3e">
            <li class="weui-media-box__info__meta">指纹采集仪	</li>
            <li class="weui-media-box__info__meta weui-media-box__info__meta-msg">通过中国安全技术认证中心 CA 认证，性能指标符合相关标准要求</li>
            </ul>
            </div><div class="weui-media-box weui-media-box_text informations">
            <h4 class="weui-media-box__title" data-id="200a6f42-376f-4632-92e9-da936d1986bc"> 项目参数 </h4>

            <ul class="weui-media-box__info" data-id="42b1d8b8-692e-4400-899e-8ea92ee4f8c2">
            <li class="weui-media-box__info__meta">发卡盒容量	</li>
            <li class="weui-media-box__info__meta weui-media-box__info__meta-msg">500</li>
            </ul>

            <ul class="weui-media-box__info" data-id="43ac477d-be84-47a6-89ff-1758d0198f75">
            <li class="weui-media-box__info__meta">发卡机容量	</li>
            <li class="weui-media-box__info__meta weui-media-box__info__meta-msg">200</li>
            </ul>
            </div><div class="weui-media-box weui-media-box_text informations">
            <h4 class="weui-media-box__title" data-id="2038fcf7-2858-4e95-be53-6c5075d7a462"> 运行环境 </h4>

            <ul class="weui-media-box__info" data-id="bbcf395a-348e-4860-b4f0-87fab2480abe">
            <li class="weui-media-box__info__meta">温度、相对湿度	</li>
            <li class="weui-media-box__info__meta weui-media-box__info__meta-msg">0C ~55C 30%~90%</li>
            </ul>
            </div><div class="weui-media-box weui-media-box_text informations">
            <h4 class="weui-media-box__title" data-id="283c1fb6-a6a7-4e0e-a8e4-173d4bb9828d"> 基本信息 </h4>

            <ul class="weui-media-box__info" data-id="ecc970e8-b7e3-4c38-a2ce-848a8efcd584">
            <li class="weui-media-box__info__meta">尺寸	</li>
            <li class="weui-media-box__info__meta weui-media-box__info__meta-msg">600*500*1650</li>
            </ul>
        </div>
    </div>
</div>
</template>

<style lang="less" scoped>
#parameter {
    background-color: #fff;
    position: relative;
    div.informations::before {
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
        left: 15px;
    }
    h4 {
        display: block;
        position: relative;
        padding-bottom: 10px;
        padding-left: 16px;
        &:after {
            content: " ";
            position: absolute;
            left: 0;
            bottom: 0;
            right: 0;
            height: 1px;
            border-top: 1px solid #676767;
            color: #676767;
            -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
            -webkit-transform: scaleY(0.5);
            transform: scaleY(0.5);
            left: 15px;            
      }
  }
}

.weui-media-box__info__meta-msg {
    width: 60%;
    letter-spacing: 1px;
    line-height: 1.3rem;
}

.informations .weui-media-box__info {
    font-size: 15px;            
    color: #000;
    padding-bottom: 15px;
    position: relative;
    padding-left: 1rem;
    li:first-child {
        width: 30%;
    }
    li:last-child {
        width: 55%;
    }
}
</style>