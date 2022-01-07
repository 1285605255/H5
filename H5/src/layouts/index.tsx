import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Loading, withRouter, history } from 'umi';
import { IndexModelState } from '../models/index';
import { Spin } from 'antd';

const pangu = require('pangu');
/**
 * 全局的布局
 */
const Index: React.FC<any> = (props) => {
	const { dispatch, children, loading } = props;
	useEffect(() => {
		dispatch({
			type: "global/fetchGetToken", payload: {
				username: "test01",
				password: "123456"
			}
		})
		pangu.autoSpacingPage()
		let split = location.search.split('?code=')
		const fromData = new FormData()
		fromData.append('code', split[1])
		// if (localStorage.getItem('Toast')) {
		// if (location.query.code) {
		// 	dispatch({
		// 		type: "global/fetchGetToken", payload: { code: fromData },
		// 		callback: (response: { code: number; }) => {
		// 			if (response.code === -1) {
		// 				history.replace('/abnormal/')
		// 			} else {
		// 			}
		// 		}
		// 	})
		// }
		// } else {
		// history.replace('/instruction/')
		// }

		// 控制台
		console.warn = function () { }
		// 		console.log = function () { }
	}, [])

	return (
		<Spin spinning={loading} size="large" tip="加载中..." delay={5}>
			{children}
		</Spin>
	);
};

export default withRouter(connect(
	({ global, loading }: { global: IndexModelState; loading: Loading }) => {
		let isLoading = loading.global;
		if (loading.effects['pages_score/fetchTreeBadgeFlag']) {
			isLoading = false;
		}
		if (loading.effects['pages_score/fetchTreeScoreList']) {
			isLoading = false;
		}
		if (loading.effects['pages_score/fetchAvgScoreCommonList']) {
			isLoading = true;
		}
		if (loading.effects['pages_score/fetchUserCheckIllness']) {
			isLoading = true;
		}
		return ({
			global,
			loading: isLoading,
		})
	},
)(Index));
