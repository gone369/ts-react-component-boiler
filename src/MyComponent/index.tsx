import styles from './index.module.less';
import React, { useState, useEffect, useCallback } from 'react';

import { Row, Col, Card } from 'antd';

interface State {
  [key: string]: any;
}

interface Props {
  className?: string;
  style?: Record<string, any>;
  children?: any;
}

export default function MyComponent(props: Props) {
  const { className, style, children } = props;
  const [state, setState] = useState<State>({});

  useEffect(() => {
    // onMount
    return () => {
      // willUnmount
    };
  }, []);

  return (
    <div className={styles.root}>
      <Card bordered>
        <div className={styles.container}>Hello World</div>
      </Card>
    </div>
  );
}
