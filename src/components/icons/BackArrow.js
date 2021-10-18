import * as React from "react"

function BackArrow(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
      <path
        d="M10 20l1.818-1.818L4.935 11.3H20V8.7H4.935l6.883-6.882L10 0 0 10z"
        fill={props.fill}
      />
    </svg>
  )
}

export default BackArrow
