import React from "react";

export default function Tarrif({ tele }) {
  const moon = <div className="mon">/Месяц</div>;
  const day = <div className="mon">/День</div>;
  const rub = <div className="rub">₽</div>;
  const price = <div className="price">{tele.price}</div>;
  const rowming = <>ИНТЕРНЕТ ЗА ГРАНИЦЕЙ</>;
  const classic = <>Классический</>;
  const forDevices = <>Интернет для устройств</>;
  const withOutAmount = <>Без абонентской платы</>;
  return (
    <>
      {!tele.withOutAmount ? (
        <div className="main">
          <div>
            <div className="block-1">
              <div className="title"> {tele.title}</div>
              {tele.itsHit && <div className="image-hit"></div>}
              {price}
              {rub}
              {tele.forDay ? day : moon}
            </div>
            <div className="block-2">
              <div className="traffic-size">
                {tele.traffic > 1 ? (
                  <>
                    <b>{tele.traffic}</b>
                    <span>ГБ</span>
                  </>
                ) : (
                  <>
                    {!tele.unlimInternet ? (
                      <b>
                        {tele.traffic * 1000}
                        <span>МБ</span>
                      </b>
                    ) : (
                      <div className="internet">БЕЗЛИМИТНЫЙ ИНТЕРНЕТ</div>
                    )}
                  </>
                )}
                <br />
                <span>
                  {tele.socialMediaInclude && <span>+безлимитные</span>}
                </span>
              </div>
              {tele.socialMediaInclude && <div className="img-icons"></div>}
              {tele.rowming && rowming}
            </div>
            <div className="block-3">
              <div className="time">
                {tele.time !== 0 && (
                  <>
                    <b>{tele.time}</b>мин.
                  </>
                )}
              </div>
              <div className="withOutLimit">
                {tele.withOutLimit !== "" && tele.withOutLimit}
              </div>
            </div>
          </div>
          <div className="block-4">
            {tele.sms !== 0 && <div className="sms">{tele.sms}SMS</div>}
          </div>
        </div>
      ) : (
        <div className="withOutAmount">
          {tele.forDevices && <b>{forDevices}</b>}
          {tele.classic && <b>{classic}</b>}
          <br />
          {withOutAmount}
        </div>
      )}
    </>
  );
}
