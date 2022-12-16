import React from "react";

import { observer } from "mobx-react-lite";

export const Home = observer<{size : number}>(({size}) => (
    <div>{size}</div>
))