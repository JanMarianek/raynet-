import { http, HttpResponse } from 'msw';

export const businessCaseRows = [
  {
    id: 101,
    name: 'CRM implementation',
    code: 'BC-101',
    type: 'BusinessCase',
  },
  {
    id: 102,
    name: 'Support automation',
    code: 'BC-102',
    type: 'BusinessCase',
  },
  {
    id: 103,
    name: 'Sales reporting',
    code: 'BC-103',
    type: 'BusinessCase',
  },
];

export const mswHandlers = {
  api: [
    http.get('/api/hello', () =>
      HttpResponse.json({
        message: 'Hello World from Storybook MSW',
        timestamp: '2026-05-22T12:00:00.000Z',
        status: 'ok',
        dataRows: businessCaseRows,
      }),
    ),
  ],
};
