'use client';

import { useEffect, useState, useRef } from 'react';
import type {
  Firestore,
  CollectionReference,
  Query,
  DocumentData,
} from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';

export function useCollection<T extends DocumentData>(
  query: Query<T> | CollectionReference<T> | null
) {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const queryRef = useRef(query);
  queryRef.current = query;

  useEffect(() => {
    if (!queryRef.current) {
      setLoading(false);
      setData(null);
      return;
    }

    setLoading(true);

    const unsubscribe = onSnapshot(
      queryRef.current,
      (snapshot) => {
        const docs = snapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            } as T)
        );
        setData(docs);
        setLoading(false);
      },
      (err) => {
        console.error(err);
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [queryRef.current]);

  return { data, loading, error };
}
