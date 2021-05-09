import React, { useState, useEffect } from 'react'
import requestor from '../consume'

import { useParams, useHistory } from 'react-router-dom'

import ParkForm from '../components/ParkForm'

export default function EditEvent (props) {
  const [event, setEvent] = useState(null)
  const history = useHistory()
  const { id } = useParams()

  function getPark (id, consume = requestor) {
    return consume(`/park/${id}`)
      .then((res) => {
        const { name, address, url, description, image, playGround, toilets, picnicSite, sportsField, tramp, dogWalking, approved } = res.body
        return { name, address, url, description, image, playGround, toilets, picnicSite, sportsField, tramp, dogWalking, approved }
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  function updatePark (id, park, navigateTo, consume = requestor) {
    const parkToUpdate = {
      id: Number(id),
      ...park
    }
    return consume(`/park/${id}`, 'patch', parkToUpdate)
      .then(() => {
        navigateTo(`/park-details/${id}`)
        return null
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    getPark(id)
      .then((parkData) => {
        setEvent(parkData)
        return null
      })
  }, [])

  function submitPark (form) {
    updatePark(id, form, history.push)
  }

  return (
    event
      ? <ParkForm
        formData={event}
        action='Update Park'
        submitPark={submitPark}
      />
      : null
  )
}