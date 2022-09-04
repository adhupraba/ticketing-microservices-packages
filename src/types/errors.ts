import type { NextFunction, Request, Response } from "express";

export type ErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => Response | undefined;

export type SerializedError = { message: string; param?: string };
