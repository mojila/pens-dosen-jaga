import React from 'react';
import Head from 'next/head';

import AddMaterialPage from '../../../../components/add-material'

export default class AddMaterial extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Tambah Materi</title>
                </Head>
                <div>
                    <AddMaterialPage/>
                </div>
            </div>
        );
    }
}