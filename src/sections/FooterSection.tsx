import React from 'react'
import ExternalLinkIconComponent from '../components/ExternalLinkIconComponent'

const FooterSection: React.FC = () => {
  return (
    <footer>
        <div className="socials">
            <ExternalLinkIconComponent link="https://facebook.com" icon="fa-facebook" />
            <ExternalLinkIconComponent link="https://instagram.com" icon="fa-instagram" />
            <ExternalLinkIconComponent link="https://twitter.com" icon="fa-twitter" />
            <ExternalLinkIconComponent link="https://google.com" icon="fa-google" />
            <ExternalLinkIconComponent link="https://linkedin.com" icon="fa-linkedin" />
        </div>
        <div>
            © 2022 Fixxo. All Rights Reserved.
        </div>
    </footer>
  )
}

export default FooterSection