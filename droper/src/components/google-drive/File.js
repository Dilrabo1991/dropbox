import { faFile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export default function File({ file }) {
  return (
    <div>
      <a
        href={file.url}
        className="btn btn-outline-info text-truncate w-100">
        <FontAwesomeIcon icon={faFile} className="mr-2" />
        {file.name}
      </a>
    </div>
  )
}