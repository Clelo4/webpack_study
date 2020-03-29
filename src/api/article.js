import request from '@/utils/request';

/**
 *
 * @param {String} articleType 文章类型
 * @param {Number} pageSize 每页数量
 * @param {Number} pageNumber 页码
 */
export function getArticleList(articleType, pageSize, pageNumber) {
  return request({
    url: '/article/getList',
    method: 'get',
    params: {
      articleType,
      pageSize,
      pageNumber
    }
  });
}

/**
 *
 * @param {String} articleType 文章类型
 * @param {Number} articleId 文章ID
 */
export function getArticle(articleType, articleId) {
  return request({
    url: '/article/get',
    method: 'get',
    params: {
      articleType,
      articleId
    }
  });
}

/**
 * @param {Number} categoryType 分类类型
 */
export function getCategory(categoryType) {
  return request({
    url: '/category/get',
    method: 'get',
    params: {
      categoryType: categoryType
    }
  });
}
