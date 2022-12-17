import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import BScroll from '@better-scroll/core';
import { initList } from './utils';

type IProps = {
  minScale: number;
  maxScale: number;
  initScale: number;
  onChange: any;
};

export default function Index({
  minScale = 0,
  maxScale = 100,
  initScale = 80,
  onChange = () => {},
}: IProps) {
  const spanNum = 60;
  const myScroll = useRef<any>(null);
  const ruleWrap = useRef<any>(null);
  const ruleContent = useRef<any>(null);

  const baseValue = useRef<number>(0);
  const [value, setValue] = useState(0);

  const [ruleList, setRuleList] = useState<any[]>([]);

  const ruleWidth = (maxScale - minScale) * spanNum + 12;
  //   // console.log("ruleWidth", ruleWidth);
  //   // console.log(list);

  const setRuleValue = (val: number) => {
    const offset = (baseValue.current - val) * spanNum;
    myScroll.current.scrollTo(offset);
  };
  useEffect(() => {
    setTimeout(() => {
      setRuleValue(initScale);
    }, 300);
  }, [initScale]);

  useEffect(() => {
    baseValue.current = minScale + ruleWrap.current.clientWidth / 2 / spanNum;
    // console.log("baseValue", baseValue);
    setRuleList(initList({ minScale, maxScale }));
    myScroll.current = new BScroll(ruleContent.current, {
      scrollX: true,
      probeType: 3,
      snap: 'div',
    });
    (window as any).ms = myScroll.current;
    // console.log("myScroll", myScroll.current);

    myScroll.current.on('scroll', (e: { x: number; y: number }) => {
      const _value: any = (baseValue.current - e.x / spanNum).toFixed(1);
      // console.log("scroll", e.x, _value);
      onChange(_value);
      setValue(_value);
    });
  }, []);

  return (
    <div className="zxm_rule_select_wrap" ref={ruleWrap}>
      <div className="zxm_rs_value">{value}</div>
      <div className="zxm_rs">
        <div className="zxm_rs_arrow"></div>
        <div className="zxm_rs_inner" ref={ruleContent}>
          <div className="zxm_rs_ul_wrap" style={{ width: `${ruleWidth}px` }}>
            <div className="zxm_rs_ul">
              {ruleList.map((x: any) => (
                <>
                  <div
                    key={x.value}
                    className={`zxm_rs_li${x.isInt ? ' zxm_rs_li_int' : ''}`}
                  >
                    {x.isInt ? (
                      <>
                        <div className="zxm_rs_li_value">{x.value}</div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
