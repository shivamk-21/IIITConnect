import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const CentralData = createContext();

const Provider = ({ children }) => {
  const [quoteData, setQuoteData] = useState({
    quote: "Strive to Learn Not Learn to Strive",
    author: "Annonymous",
  });
  const [loading, setLoading] = useState(true);
  const [tabBarVisible, setTabBarVisible] = useState(true);

  const toggleTabBar = () => {
    setTabBarVisible((prev) => !prev);
  };
  const fetchQuote = async () => {
    try {
      const response = await axios.get(
        `https://iiit-backend.onrender.com/quote`
      );
      setQuoteData({
        quote: response.data.quote,
        author: response.data.author,
      });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setLoading(false);
    }
  };

  const fetchQuoteOnceADay = async () => {
    const lastFetched = await AsyncStorage.getItem("lastFetchedQuote");
    const currentDate = new Date().toISOString().split("T")[0];

    if (lastFetched !== currentDate) {
      fetchQuote();
      await AsyncStorage.setItem("lastFetchedQuote", currentDate);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuoteOnceADay();
  }, []);

  valuesToShare = { quoteData, loading, tabBarVisible, toggleTabBar };
  return (
    <CentralData.Provider value={valuesToShare}>
      {children}
    </CentralData.Provider>
  );
};

const useConText = () => {
  const context = useContext(CentralData);
  if (!context) {
    throw new Error("useQuote must be used within a QuoteProvider");
  }
  return context;
};

export { Provider, useConText };
export default CentralData;
