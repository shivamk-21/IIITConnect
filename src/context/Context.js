import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const CentralData = createContext();

const Provider = ({ children }) => {
  const [subject, setSubject] = useState([]);
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
  useEffect(() => {
    loadSubjectData();
  }, []);

  useEffect(() => {
    saveSubjectData();
  }, [subject]);

  const loadSubjectData = async () => {
    try {
      const savedSubject = await AsyncStorage.getItem("subject");
      if (savedSubject) {
        setSubject(JSON.parse(savedSubject));
      }
    } catch (error) {}
  };

  const saveSubjectData = async () => {
    try {
      await AsyncStorage.setItem("subject", JSON.stringify(subject));
    } catch (error) {}
  };

  const addSubject = (name, credits) => {
    setSubject([...subject, { name, credits, present: 0, absent: 0 ,presentDates:[],absentDates:[]}]);
  };

  const removeSubject = (name) => {
    const updatedSubjects = subject.filter((s) => s.name !== name);
    setSubject(updatedSubjects);
  };

  const addPresent = (name) => {
    const currentDate = new Date();
    const updatedSubjects = subject.map((s) => {
      if (s.name === name) {
        return { ...s, present: s.present + 1, presentDates: [...s.presentDates, currentDate] };
      }
      return s;
    });
    setSubject(updatedSubjects);
  };
  
  const addAbsent = (name) => {
    const currentDate = new Date();
    const updatedSubjects = subject.map((s) => {
      if (s.name === name) {
        return { ...s, absent: s.absent + 1 ,absentDates: [...s.absentDates, currentDate] };
      }
      return s;
    });
    setSubject(updatedSubjects);
  };

  const updateSubject = (name, newAbsent, newPresent) => {
    const updatedSubjects = subject.map((s) => {
      if (s.name === name) {
        return { ...s, absent: newAbsent, present: newPresent };
      }
      return s;
    });
    setSubject(updatedSubjects);
  };

  valuesToShare = {
    quoteData,
    loading,
    tabBarVisible,
    toggleTabBar,
    subject,
    addSubject,
    removeSubject,
    addPresent,
    addAbsent,
    updateSubject,
  };
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
