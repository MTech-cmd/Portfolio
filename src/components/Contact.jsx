import { CONTACT } from '../data';

const Contact = () => {
  return (
    <div className="pb-20">
        <h2 className="my-10 text-center text-4xl">Let's Get In Touch</h2>
        <div className="text-center tracking-tighter">
          <p className="my-4">{CONTACT.phone}</p>
          <div>
            <a href={`mailto:` + CONTACT.email} className="my-4 underline">{CONTACT.email}</a>
          </div>
          <div>
            <a href={`https://www.instagram.com/` + CONTACT.instagram}>Instagram: {CONTACT.instagram}</a>
          </div>
          <div>
          <a href={`https://x.com/` + CONTACT.twitter}>Twitter: {CONTACT.twitter}</a>
          </div>
        </div>
    </div>
  )
}

export default Contact