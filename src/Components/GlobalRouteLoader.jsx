import { AnimatePresence, motion} from 'framer-motion'
import React from 'react'
import CarLoader from './Loader/CarLoader'
import { useNavigation } from 'react-router-dom'

const GlobalRouteLoader = () => {
    const navigation = useNavigation()
    const isBusy = navigation.state === 'loading' || navigation.state === 'submitting'

    return (
        <AnimatePresence>
            {isBusy && (
                <motion.div
                    key="route-loader"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] grid place-items-center bg-black/50 backdrop-blur-sm"
                >
                    <div className="flex flex-col items-center">
                        <CarLoader />
                        <p className="mt-3 text-white/90">Loading...</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

    )
}

export default GlobalRouteLoader