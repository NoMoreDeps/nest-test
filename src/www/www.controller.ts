import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import {renderToString} from "react-dom/server";
import {createElement} from "react";
import {App} from "../../react/App";
import {StaticRouter} from "react-router-dom/server"

@Controller('www')
export class WwwController {
  @Get("*")
  serverAll(@Req() request: Request): string {
    const app = createElement(StaticRouter, {location:request.url}, createElement(App));
    return `Welcome to SSR: ${request.url} :
     ${renderToString(app)}`;
  }
}