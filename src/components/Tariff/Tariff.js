import React from "react";

export default function Tarrif({ tariff }) {
  const moon = <div className="mon">/Месяц</div>;
  const day = <div className="mon">/День</div>;
  const rub = <div className="rub">₽</div>;
  const price = <div className="price">{tariff.price}</div>;
  const rowming = 'ИНТЕРНЕТ ЗА ГРАНИЦЕЙ';
  const classic =  'Классический' ;
  const forDevices =  'Интернет для устройств' ;
  const withOutAmount = 'Без абонентской платы' ;
  if (!tariff.withOutAmount) {
    return (
      <div className="main">
        <div>
          <div className="block-1">
            <div className="title"> {tariff.title}</div>
            {tariff.itsHit && <div className="image-hit"></div>}
            {price}
            {rub}
            {tariff.forDay ? day : moon}
          </div>
          <div className="block-2">
            <div className="traffic-size">
              {tariff.traffic > 1 ? (
                <>
                  <b>{tariff.traffic}</b>
                  <span>ГБ</span>
                </>
              ) : (
                <>
                  {!tariff.unlimInternet ? (
                    <b>
                      {tariff.traffic * 1000}
                      <span>МБ</span>
                    </b>
                  ) : (
                    <div className="internet">БЕЗЛИМИТНЫЙ ИНТЕРНЕТ</div>
                  )}
                </>
              )}
              <br />
              <span>
                {tariff.socialMediaInclude && <span>+безлимитные</span>}
              </span>
            </div>
            {tariff.socialMediaInclude && <div className="img-icons"></div>}
            {tariff.rowming && rowming}
          </div>
          <div className="block-3">
            <div className="time">
              {tariff.time !== 0 && (
                <>
                  <b>{tariff.time}</b>мин.
                </>
              )}
            </div>
            <div className="withOutLimit">
              {tariff.withOutLimit !== "" && tariff.withOutLimit}
            </div>
          </div>
        </div>
        <div className="block-4">
          {tariff.sms !== 0 && <div className="sms">{tariff.sms}SMS</div>}
        </div>
      </div>
    );
  } else {
    return (
      <div className="withOutAmount">
        {tariff.forDevices && <b>{forDevices}</b>}
        {tariff.classic && <b>{classic}</b>}
        <br />
        {withOutAmount}
      </div>
    );
  }
}
