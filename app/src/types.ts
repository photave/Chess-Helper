import { VueChessboard, GlobalChessboard } from './chessboard';

export type Nullable<T> = T | null;

export type AnyFunction = (...args: any[]) => any;

export interface IChessboardConstructor {
  new (element: Element): IChessboard;
}

export interface IChessboard {
    getElement: () => Element
    getRelativeContainer: () => Element
    makeMove: (fromSq: TArea, toSq: TArea, promotionPiece?: string) => void
    isLegalMove: (fromSq: TArea, toSq: TArea) => boolean
    isPlayersMove: () => boolean
    getPiecesSetup: () => Record<string, { color: number, type: string, area: string }>
    markArrow: (fromSq: TArea, toSq: TArea) => void
    unmarkArrow: (fromSq: TArea, toSq: TArea) => void
    clearMarkedArrows: () => void
    markArea: (square: TArea) => void
    unmarkArea: (square: TArea) => void
}

export type TArea = string;

export type TPiece = string;

export type TFromTo = [ TArea, TArea ];

export type TMoveType = string;

export interface IMoveTemplate {
    piece: TPiece
    moveType: TMoveType
    from?: TArea
    to: TArea
    promotionPiece?: TPiece
}

export interface IMove extends IMoveTemplate {
    from: TArea
}