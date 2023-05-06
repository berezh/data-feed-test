import { useCallback } from 'react';

export function useInputTextCallback(
  action: (value: string) => void,
  ...params: any[]
): (e: React.FormEvent<HTMLInputElement>) => void {
  return useCallback((e: React.FormEvent<HTMLInputElement>) => {
    action(e.currentTarget.value);
  }, params);
}

export function useInputFileCallback(
  action: (...files: File[]) => void,
  ...params: any[]
): (e: React.FormEvent<HTMLInputElement>) => void {
  return useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const targetFiles = e.currentTarget.files || [];
    const files: File[] = [];
    for (let i = 0; i < targetFiles.length; i++) {
      files.push(targetFiles[i]);
    }
    action(...files);
  }, params);
}

export function useTextareaCallback(
  action: (value: string) => void,
  ...params: any[]
): (e: React.FormEvent<HTMLTextAreaElement>) => void {
  return useCallback((e: React.FormEvent<HTMLTextAreaElement>) => {
    action(e.currentTarget.value);
  }, params);
}

export function useInputCheckboxCallback(
  action: (value: boolean) => void,
  ...params: any[]
): (e: React.FormEvent<HTMLInputElement>) => void {
  return useCallback((e: React.FormEvent<HTMLInputElement>) => {
    action(e.currentTarget.checked);
  }, params);
}
