import MeetupList from '../component/meetup/MeetupList';
const data = [
  {
    id: '883bxy9i2',
    image:
      'https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg',
    title: 'First title image',
    address: 'Goma Himbi du mussee 07',
  },
  {
    id: '883bxysesd9i2',
    image:
      'https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg',
    title: 'First title image',
    address: 'Goma Himbi du mussee 07',
  },
  {
    id: '883bxy352',
    image:
      'https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg',
    title: 'First title image',
    address: 'Goma Himbi du mussee 07',
  },
  {
    id: '88edgdd9i6f',
    image:
      'https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg',
    title: 'First title image',
    address: 'Goma Himbi du mussee 07',
  },
];
export default function HomePage(props) {
  console.log('Home page:', props);
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: data,
    },
  };
}
