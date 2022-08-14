import './App.css';
import './styles/Artist.css';
import Artist from './components/Artist.js'

function App() {
  return (
    <div className="App">
      <div className='container-principal'>
        <h1>Welcome, search for your favorite artist!</h1>
        <Artist 
          img = 'joshdun'
          name = 'Josh Dun'
          occupation = 'Drummer at Twenty One Pilots'
          description = 'Joshua William Dun (born June 18, 1988) is an American musician. He is best known as half of the American musical duo Twenty One Pilots, alongside Tyler Joseph, contributing drums, percussion, trumpet and backing vocals. He has also collaborated with a variety of different artists.' />
        <Artist 
        img = 'tylerjoseph'
        name = 'Tyler Joseph'
        occupation = 'Vocalist at Twenty One Pilots'
        description = 'Tyler is an American rapper, singer, musician, and songwriter. He is best known as the frontman for the musical duo Twenty One Pilots, alongside bandmate Josh Dun. As a member of Twenty One Pilots he has been nominated for six Grammy Awards, of which he has won one.' />
          <Artist 
          img = 'joji'
          name = 'Joji'
          occupation = 'Singer, songwriter'
          description = 'George Kusunoki Miller (born 18 September 1992), better known by his stage name Joji and formerly by his online aliases Filthy Frank and Pink Guy, is a Japanese singer-songwriter, record producer, author, and former Internet personality, YouTuber, and comedian.' />
        <Artist 
          img = 'adele'
          name = 'Adele'
          occupation = 'Singer, songwriter'
          description = 'Adele Laurie Blue Adkins, (May 5, 1988,England), English pop singer and songwriter whose soulful emotive voice and traditionally crafted songs made her one of the most broadly popular performers.' />
        <Artist 
          img = 'madeon'
          name = 'Madeon'
          occupation = 'Dj, producer'
          description = 'Hugo Pierre Leclercq (born 30 May 1994), is a music producer from Nantes, France. He initially gained popularity by means of his video "Pop Culture", which was published to YouTube and subsequently received several million views in its first few days of broadcast.' />
        <Artist 
          img = 'harrystyles'
          name = 'Harry Styles'
          occupation = 'Singer'
          description = 'Harry Edward Styles (born 1 February 1994) is an English singer, songwriter and actor. His musical career began in 2010 as a solo contestant on the British music competition series The X Factor like members of the boy band One Direction and a highly successful solo artist known for his multiple chart-topping singles and albums.' />

      </div>
      
    </div>
  );
}

export default App;
