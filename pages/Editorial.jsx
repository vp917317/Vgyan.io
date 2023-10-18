import React , {useEffect , useState} from 'react'
import Head from 'next/head'; 
import "../styles/News.css";
import Footer from "../components/Footer";
import ToolsNav from "../components/ToolsNav";
import { collection, getDoc , doc} from 'firebase/firestore';
import firestore from '../Firebase';
import '../styles/index.css'

function Editorial() {

  const [htmlData, setHtmlData] = useState("");
  const [isLoading, setLoading] = useState(true); // Show the loader by default

  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0];

    var cachedData = '';
  
    // Start loading
    setLoading(true);
  
    // If cached data exists, set it from local storage
    if (cachedData) {
      setHtmlData(cachedData);
  
      console.log("cached data")
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } else {
      // If cached data doesn't exist, fetch it from Firestore
      const documentRef = doc(firestore, 'editorial', currentDate);
  
      getDoc(documentRef)
        .then((docSnapshot) => {
          if (docSnapshot.exists()) {
            const data = docSnapshot.data().data;
            setHtmlData(data); // Replace 'yourDataField' with the field containing your data
            cachedData=data; // Cache the data in local storage
            console.log("fetched data")
          } else {
            console.log("No such document!");
          }
  
          // Set a timeout to hide the loader after 3 seconds
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        })
        .catch((error) => {
          console.error("Error fetching document:", error);
  
          // Set a timeout to hide the loader after 3 seconds
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        });
    }
  }, []);
  



  return (
    <>
    {/* {isLoading ? (
      <Loader text="Loading Today's Editorial Analysis" time="3000" />
    ) : ( */}

<Head>
        {/* Set the page title and meta description for SEO */}
        <title>Editorial Analysis for Today - Vgyan.io</title>
        <meta name="description" content="Read today's editorial analysis and stay informed about the latest news and insights." />
        {/* Add other SEO-related meta tags here */}
         {/* JSON-LD structured data for Article */}
         <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Editorial Analysis for Today",
              "description": "Read today's editorial analysis and stay informed about the latest news and insights.",
              "publisher": {
                "@type": "Organization",
                "name": "vgyan.io", // Replace with your website's name
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://imgtr.ee/images/2023/09/23/0ab9e1d72544a7035e90772385108976.jpeg" 
                }
              }
            }
          `}
        </script>

      </Head>



      <div
        //className="flex flex-col justify-center items-center h-screen bg-white"
        class="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl"
        style={{ background: "#ffe4e1", height:'100%' }}
      >
        <ToolsNav headline="Editorial Analysis for Today" />
        <div
          className="article p-6 mx-auto max-w-3xl bg-gray-700 shadow-md rounded-md flex justify-center"
        >
          <article>
          <div
            className="article"
            dangerouslySetInnerHTML={{ __html: htmlData }}
          />
          </article>
        </div>
        
      </div>

    
    <Footer />
  </>
  )
}

export default Editorial;