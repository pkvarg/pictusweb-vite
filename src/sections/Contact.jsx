import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Message from '../components/Message'

const ContactForm = () => {
  const [message, setMessage] = useState(null)
  const [messageSuccess, setMessageSuccess] = useState(null)
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [mailMessage, setMailMessage] = useState('')
  const [checkBox, setCheckBox] = useState(false)

  const handleCheckBox = () => {
    setCheckBox((current) => !current)
  }

  const form = useRef()
  const x = import.meta.env.VITE_EMAIL_EXTRA_ONE
  const y = import.meta.env.VITE_EMAIL_EXTRA_TWO
  const [passwordGroupOne, setPasswordGroupOne] = useState(x)
  const [passwordGroupTwo, setPasswordGroupTwo] = useState(y)
  const sendEmail = (e) => {
    e.preventDefault()

    if (passwordGroupOne !== x || passwordGroupTwo !== y) {
      setMessage('Neodoslané! Napíšte nám na info@pictusweb.sk, prosím.')
      setName('')
      setSubject('')
      setEmail('')
      setPhone('')
      setMailMessage('')
      const element = document.getElementById('contact')
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE,
          import.meta.env.VITE_EMAILJS_TEMPLATE,
          form.current,
          import.meta.env.VITE_EMAILJS_USER
        )
        .then(
          (result) => {
            console.log(result.text)
            setMessageSuccess('Vaša správa bola úspešne odoslaná!')

            console.log('message sent')
          },
          (error) => {
            console.log(error.text)
            setMessageSuccess(
              'Chyba! Napíšte nám na info@pictusweb.sk, prosím.'
            )
          }
        )

      setName('')
      setSubject('')
      setEmail('')
      setPhone('')
      setMailMessage('')
      const element = document.getElementById('contact')
      element.scrollIntoView({ behavior: 'smooth' })
      // setMessageSuccess('Vaša správa bola úspešne odoslaná!')
    }
  }

  return (
    <div className='pt-40 pb-10 '>
      <h1
        id='contact'
        className='text-[35px] lg:text-[60px] text-white text-center lg:pt-0 pt-[55px]'
      >
        Napíšte nám správu
      </h1>
      <div className='mx-4 md:mx-6 lg:mx-0 flex lg:flex-row flex-col lg:justify-center text-white lg:py-[100px] '>
        <div className='pt-[50px] lg:pt-0 lg:pt-[0px] '>
          {messageSuccess && (
            <Message variant='success'>{messageSuccess}</Message>
          )}
          {message && <Message variant='danger'>{message}</Message>}
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className='flex flex-col gap-[2.5px] text-[35px]'
            >
              <div className='flex lg:flex-row flex-col gap-[25px]'>
                <div className='flex flex-col justify-center '>
                  <label className='form-label mt-[2.5%]'>
                    Meno <sup>*</sup>
                  </label>
                  <input
                    className='form-control rounded-xl'
                    type='text'
                    name='user_name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required='required'
                  />

                  <label className='form-label mt-[2.5%]'>
                    Email <sup>*</sup>
                  </label>
                  <input
                    className='form-control rounded-xl'
                    type='email'
                    name='user_email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required='required'
                  />
                </div>
                <div className='flex flex-col justify-center '>
                  <label className='form-label mt-[2.5%]'>Predmet</label>
                  <input
                    className='form-control rounded-xl'
                    type='text'
                    name='user_subject'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />

                  <label className='form-label mt-[2.5%]'>Telefón</label>
                  <input
                    className='form-control rounded-xl'
                    type='text'
                    name='user_phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className='flex flex-col'>
                <label className='form-label mt-[2.5%]'>
                  Vaša správa <sup>*</sup>
                </label>
                <textarea
                  className='form-control rounded-xl'
                  rows='5'
                  name='message'
                  value={mailMessage}
                  onChange={(e) => setMailMessage(e.target.value)}
                  required='required'
                ></textarea>

                <div className='flex flex-row form-check mt-8'>
                  <input
                    id='flexCheckDefault'
                    type='checkbox'
                    defaultChecked={false}
                    value={checkBox}
                    onChange={handleCheckBox}
                    required='required'
                    className='rounded-xl'
                  />

                  <label
                    className='form-check-label lg:text-[30px] text-[35px] ml-[15px]'
                    htmlFor='flexCheckDefault'
                  >
                    Súhlasím so spracovaním údajov
                  </label>
                </div>
              </div>
              <input
                className='form-control hidden'
                type='text'
                defaultValue={passwordGroupOne}
                onChange={(e) => setPasswordGroupOne(e.target.value)}
              />
              <input
                className='form-control hidden'
                type='text'
                defaultValue={passwordGroupTwo}
                onChange={(e) => setPasswordGroupTwo(e.target.value)}
              />
              <button
                className='text-[35px] bg-violet lg:mt-20 mt-10 pt-3 rounded-xl border border-white hover:text-violet hover:bg-white'
                type='submit'
                value='Send'
              >
                Odoslať
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
