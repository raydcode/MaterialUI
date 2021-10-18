import * as React from "react"

function Analytics(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={327.568}
      height={248}
      {...props}
    >
      <path
        fill="none"
        stroke="#ccc"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M45.811 1h262.53M45.811 28.732h262.53M45.811 55.725h262.53M45.811 81.978h262.53M45.811 108.97h262.53m-262.53 27.732h262.53m-262.53 26.253h262.53m-262.53 26.993h262.53M45.811 216.94h262.53"
      />
      <path
        fill={props.light}
        d="M65.778 135.593h45.111v106.491H65.778zm65.817 0h45.111v107.231h-45.111zm65.817-80.608h45.111v187.099h-45.111zm65.818-27.362h45.111v214.461H263.23z"
      />
      <path
        d="M327.568 242.084H45.071V1"
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M87.963 248v-5.916m66.187 5.176v-5.916m65.818 5.916v-5.916M285.046 248v-5.916"
      />
      <path d="M86.558 89.343a58.223 58.223 0 00-44.63 95.006L1.676 225.755a6.3 6.3 0 00.311 8.867 6.172 6.172 0 004.311 1.671 6.3 6.3 0 004.518-1.982l39.986-41.147A58.262 58.262 0 1086.558 89.343zm33.2 90.273a45.68 45.68 0 1113.082-32.435 45.459 45.459 0 01-13.078 32.435z" />
      <path
        d="M132.845 147.18a45.728 45.728 0 11-13.7-32.184 45.4 45.4 0 0113.7 32.184z"
        fill={props.dark}
      />
      <g
        fill="#f2f2f2"
        fontSize={10}
        fontFamily="Courier-Oblique, Courier"
        fontStyle="oblique"
      >
        <text transform="translate(82.332 110.867)">
          <tspan x={0} y={0}>
            {"11"}
          </tspan>
        </text>
        <text transform="translate(58.781 123.164)">
          <tspan x={0} y={0}>
            {"001000101"}
          </tspan>
        </text>
        <text transform="translate(49.994 135.462)">
          <tspan x={0} y={0}>
            {"011101001010"}
          </tspan>
        </text>
        <text transform="translate(46.14 147.759)">
          <tspan x={0} y={0}>
            {"1000101010101"}
          </tspan>
        </text>
        <text transform="translate(47.08 160.056)">
          <tspan x={0} y={0}>
            {"011011001001"}
          </tspan>
        </text>
        <text transform="translate(52.456 172.353)">
          <tspan x={0} y={0}>
            {"00111011100"}
          </tspan>
        </text>
        <text transform="translate(63.996 184.651)">
          <tspan x={0} y={0}>
            {"1010001"}
          </tspan>
        </text>
      </g>
    </svg>
  )
}

export default Analytics
