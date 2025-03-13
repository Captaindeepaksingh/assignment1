import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const TrademarkList = () => {
  const [trademarks, setTrademarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (query) {
      axios
        .get(`https://vit-tm-task.api.trademarkia.app/api/v3/us`) 
        .then((res) => {
          setTrademarks(res.data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [query]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      {trademarks.length > 0 ? (
        trademarks.map((tm) => (
          <div key={tm.id} className="p-2 border-b">
            <h3 className="text-lg font-bold">{tm.name}</h3>
            <p>{tm.status}</p>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default TrademarkList;
