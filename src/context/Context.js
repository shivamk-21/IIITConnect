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

  const toggleTabBar = (state) => {
    setTabBarVisible(state);
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
    setSubject([
      ...subject,
      {
        name,
        credits,
        present: 0,
        absent: 0,
        presentDates: [
          "01/06/2024",
          "02/06/2024",
          "03/06/2024",
          "04/06/2024",
          "05/06/2024",
          "06/06/2024",
          "07/06/2024",
          "08/06/2024",
          "09/06/2024",
          "10/06/2024",
          "11/06/2024",
          "12/06/2024",
          "13/06/2024",
          "14/06/2024",
          "15/06/2024",
          "16/06/2024",
          "17/06/2024",
          "18/06/2024",
          "19/06/2024",
          "20/06/2024",
        ],
        absentDates: [],
      },
    ]);
  };

  const removeSubject = (name) => {
    const updatedSubjects = subject.filter((s) => s.name !== name);
    setSubject(updatedSubjects);
  };

  const addPresent = (name) => {
    const currentDate = new Date().toLocaleDateString();
    const updatedSubjects = subject.map((s) => {
      if (s.name === name) {
        return {
          ...s,
          present: s.present + 1,
          presentDates: [...s.presentDates, currentDate],
        };
      }
      return s;
    });
    setSubject(updatedSubjects);
  };

  const addAbsent = (name) => {
    const currentDate = new Date().toLocaleDateString();
    const updatedSubjects = subject.map((s) => {
      if (s.name === name) {
        return {
          ...s,
          absent: s.absent + 1,
          absentDates: [...s.absentDates, currentDate],
        };
      }
      return s;
    });
    setSubject(updatedSubjects);
  };

  const addPresentDate = (name, date) => {
    const updatedSubjects = subject.map((s) => {
      if (s.name === name) {
        return {
          ...s,
          present: s.present + 1,
          presentDates: [...s.presentDates, date],
        };
      }
      return s;
    });
    setSubject(updatedSubjects);
  };
  const addAbsentDate = (name, date) => {
    const updatedSubjects = subject.map((s) => {
      if (s.name === name) {
        return {
          ...s,
          absent: s.absent + 1,
          absentDates: [...s.absentDates, date],
        };
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
    addAbsentDate,
    addPresentDate,
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
