import CustomSoftwareIcon from '../assets/software.svg';
import Mobile from '../assets/mobile.svg';
import WebsiteIcon from '../assets/website.svg';
import Camera from '../assets/camera.svg';
import Person from '../assets/person.svg';
import Persons from '../assets/persons.svg';
import People from '../assets/people.svg';
import Info from '../assets/info.svg';
import Bell from '../assets/bell.svg';
import Users from '../assets/users.svg';
import Gps from '../assets/gps.svg';
import Customized from '../assets/customized.svg';
import Data from '../assets/data.svg';
import Android from '../assets/android.svg';
import Globe from '../assets/globe.svg';
import Biometrics from '../assets/biometrics.svg';
import Iphone from '../assets/iphone.svg';
import Upload from '../assets/upload.svg';


export const defaultQuestions = [
    {
      id: 1,
      title: 'Which service are you interested in ?',
      active: true,
      options: [
        {
          id: 1,
          title: 'Custom Software Development',
          subtitle: null,
          icon: CustomSoftwareIcon,
          iconAlt: 'three floating screens',
          selected: false,
          cost: 0,
        },
        {
            id: 2,
            title: 'iOs/Android Development',
            subtitle: null,
            icon: Mobile,
            iconAlt: 'phones and tablet outline',
            selected: false,
            cost: 0,
          },
          {
            id: 3,
            title: 'Website Development',
            subtitle: null,
            icon: WebsiteIcon ,
            iconAlt: 'computer outline',
            selected: false,
            cost: 0,
          },
      ],
    },
  ];

  export const softwareQuestions = [
    { ...defaultQuestions[0], active: false },
    {
      id: 2,
      title: "Which platforms do you need supported?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Web Application",
          subtitle: null,
          icon: WebsiteIcon,
          iconAlt: "computer outline",
          selected: false,
          cost: 100
        },
        {
          id: 2,
          title: "iOS Application",
          subtitle: null,
          icon: Iphone,
          iconAlt: "outline of iphone",
          selected: false,
          cost: 100
        },
        {
          id: 3,
          title: "Android Application",
          subtitle: null,
          icon: Android,
          iconAlt: "outlines of android phone",
          selected: false,
          cost: 100
        }
      ],
      active: true
    },
    {
      id: 3,
      title: "Which features do you expect to use?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Photo/Video",
          subtitle: null,
          icon: Camera,
          iconAlt: "camera outline",
          selected: false,
          cost: 25
        },
        {
          id: 2,
          title: "GPS",
          subtitle: null,
          icon: Gps,
          iconAlt: "gps pin",
          selected: false,
          cost: 25
        },
        {
          id: 3,
          title: "File Transfer",
          subtitle: null,
          icon: Upload,
          iconAlt: "outline of cloud with arrow pointing up",
          selected: false,
          cost: 25
        }
      ],
      active: false
    },
    {
      id: 4,
      title: "Which features do you expect to use?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Users/Authentication",
          subtitle: null,
          icon: Users,
          iconAlt: "outline of a person with a plus sign",
          selected: false,
          cost: 25
        },
        {
          id: 2,
          title: "Biometrics",
          subtitle: null,
          icon: Biometrics,
          iconAlt: "fingerprint",
          selected: false,
          cost: 25
        },
        {
          id: 3,
          title: "Push Notifications",
          subtitle: null,
          icon: Bell,
          iconAlt: "outline of a bell",
          selected: false,
          cost: 25
        }
      ],
      active: false
    },
    {
      id: 5,
      title: "What type of custom features do you expect to need?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "Low Complexity",
          subtitle: "(Informational)",
          icon: Info,
          iconAlt: "'i' inside a circle",
          selected: false,
          cost: 25
        },
        {
          id: 2,
          title: "Medium Complexity",
          subtitle: "(Interactive, Customizable, Realtime)",
          icon: Customized,
          iconAlt: "two toggle switches",
          selected: false,
          cost: 50
        },
        {
          id: 3,
          title: "High Complexity",
          subtitle: "(Data Modeling and Computation)",
          icon: Data,
          iconAlt: "outline of line graph",
          selected: false,
          cost: 100
        }
      ],
      active: false
    },
    {
      id: 6,
      title: "How many users do you expect?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "0-10",
          subtitle: null,
          icon: Person,
          iconAlt: "person outline",
          selected: false,
          cost: 1
        },
        {
          id: 2,
          title: "10-100",
          subtitle: null,
          icon: Persons,
          iconAlt: "outline of two people",
          selected: false,
          cost: 1.25
        },
        {
          id: 3,
          title: "100+",
          subtitle: null,
          icon: People,
          iconAlt: "outline of three people",
          selected: false,
          cost: 1.5
        }
      ],
      active: false
    }
  ];
  
  
  export const websiteQuestions = [
    { ...defaultQuestions[0], active: false },
    {
      id: 2,
      title: "Which type of website are you wanting?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "Basic",
          subtitle: "(Informational)",
          icon: Info,
          iconAlt: "person outline",
          selected: false,
          cost: 100
        },
        {
          id: 2,
          title: "Interactive",
          subtitle: "(Users, API's, Messaging)",
          icon: Customized,
          iconAlt: "outline of two people",
          selected: false,
          cost: 200
        },
        {
          id: 3,
          title: "E-Commerce",
          subtitle: "(Sales)",
          icon: Globe,
          iconAlt: "outline of three people",
          selected: false,
          cost: 250
        }
      ],
      active: true
    }
  ];