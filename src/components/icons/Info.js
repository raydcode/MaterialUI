import * as React from "react"

function Info(props) {
  return (
    <svg
      id="prefix__Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <style>{`.prefix__st0{fill:${props.fill}}`}</style>
      <path
        className="prefix__st0"
        d="M235.4 172.2c0-11.4 9.3-19.9 20.5-19.9 11.4 0 20.7 8.5 20.7 19.9s-9.3 20-20.7 20c-11.2 0-20.5-8.6-20.5-20zm1.4 35.7H275V352h-38.2V207.9z"
      />
      <path
        className="prefix__st0"
        d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436s-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"
      />
    </svg>
  )
}

export default Info
