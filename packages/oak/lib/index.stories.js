import React, { useEffect, useRef } from 'react';

import oak from './';

export default { title: 'oak' };

export const basicConfig = () => {
  const containerRef = useRef();

  useEffect(() => {
    oak.render(containerRef.current, {
      debug: false,
      content: [
        {
          type: 'row',
          cols: [
            {
              size: 6,
              content: [
                {
                  type: 'text',
                  /* eslint-disable */
                  content: 'unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrumexercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                  /* eslint-enable */
                  style: {
                    horizontalAlignement: 'center',
                  },
                },
                {
                  type: 'title',
                  content: 'title heading 1',
                  headingLevel: 'h1',
                  style: {
                    horizontalAlignement: 'center',
                  },
                },
                {
                  type: 'title',
                  content: 'title heading 2',
                  headingLevel: 'h2',
                  style: {
                    horizontalAlignement: 'center',
                  },
                }, {
                  type: 'title',
                  content: 'title heading 3',
                  headingLevel: 'h3',
                  style: {
                    horizontalAlignement: 'center',
                  },
                },
                {
                  type: 'title',
                  content: 'title heading 4',
                  headingLevel: 'h4',
                  style: {
                    horizontalAlignement: 'center',
                  },
                },
                {
                  type: 'row',
                  style: {
                    horizontalAlignement: 'center',
                  },
                  cols: [
                    {
                      size: 12,
                      content: [
                        {
                          type: 'text',
                          /* eslint-disable */
                          content: 'unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrumexercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                          /* eslint-enable */
                          style: {
                            horizontalAlignement: 'center',
                          },
                        },
                      ],
                      id: 0,
                      style: {
                        col: {
                          flex: '',
                          width: '300px',
                        },
                        content: {},
                      },
                    },
                    {
                      size: 6,
                      content: [
                        {
                          type: 'row',
                          style: {
                            horizontalAlignement: 'flex-start',
                          },
                          cols: [
                            {
                              size: 12,
                              content: [],
                              id: 0,
                              style: {
                                col: {
                                  flex: '1',
                                },
                                content: {},
                              },
                            },
                          ],
                        },
                      ],
                      id: 1,
                      style: {
                        col: {
                          flex: '1',
                        },
                        content: {
                          alignItem: 'center',
                        },
                      },
                    },
                  ],
                },
              ],
              id: 0,
              style: {
                col: {
                  flex: '1',
                },
                content: {
                  textAlign: 'center',
                },
              },
            },
            {
              size: 6,
              content: [],
              id: 1,
              style: {
                col: {
                  flex: '',
                  width: '300px',
                },
                content: {},
              },
            },
          ],
        },
        {
          type: 'test',
        },
      ],
    });
  }, []);

  return (<div ref={containerRef} id="container" />);
};
