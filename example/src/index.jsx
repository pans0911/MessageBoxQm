/**
 * Created by pans0911 on 16-1-20.
 */
import React from 'react';
import UploadImg from '../../lib/UploadImg';
import 'style!css!../../style.css';
import {render} from 'react-dom';

var element = document.createElement("div");
document.body.appendChild(element);
render(<UploadImg />, element);