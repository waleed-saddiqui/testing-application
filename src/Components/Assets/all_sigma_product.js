const API = 'http://localhost:3400/getdata';

    const GetSigma = () => {
       
        let products = [];
    
      
        const getApiData = async (url) => {
            try {
                const res = await axios.get(url);
                const productApi = res.data.products;
                products = productApi;
                console.log("Sigma Products", products);
           
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        getApiData(API);
    
        return null;
    }
 